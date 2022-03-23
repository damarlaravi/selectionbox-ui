import {Component, ViewChildren} from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public rows: string[] = ['row1', 'row2', 'row3', 'row4', 'row5', 'row6'];
    public columns: string[] = ['col1', 'col2', 'col3', 'col4', 'col5', 'col6'];
    private isMouseDown: boolean = false;
    @ViewChildren('colList') colList: any;
    @ViewChildren('rowList') rowList: any;

    public mouseDownHandler(e: MouseEvent): void {
        console.log('Event is   ', e);
        this.isMouseDown = true;
    }

    public mouseMoveHandler(e: MouseEvent): void {
        if (this.isMouseDown) {
            // console.log('mouseMoveHandler Event is   ', e.target);
            // console.log('Row List   ', this.rowList);
            this.rowList._results.forEach((child: any) => {
                // console.log('child.className   ', child);
                // console.log('(e.target as HTMLElement).className)  ', (e.target as HTMLElement).className);
                if(child.nativeElement.className === (e.target as HTMLElement).className) {
                    console.log('Coming here');
                    (e.target as HTMLElement).classList.add('sel-box');
                }
            })
        }
    }

    public mouseUpHandler(e: MouseEvent): void {
        console.log('mouseUpHandler Event is   ', e);
        this.isMouseDown = false;
        this.rowList._results.forEach((child: any) => {
            child.nativeElement.classList.remove('sel-box');
        })
    }
}
