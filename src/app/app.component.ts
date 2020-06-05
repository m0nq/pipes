import { Component } from '@angular/core';

@Component({
    selector: 'cq-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    name: string;
    date: string;

    public onNameChange(value: string): void {
        this.name = value;
    }

    public onDateChange(value: string) {
        this.date = value;
    }
}
