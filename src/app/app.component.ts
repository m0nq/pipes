import { Component } from '@angular/core';

@Component({
    selector: 'cq-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    name: string;
    date: string;
    amount: number;
    height: number;
    miles: number;

    public onNameChange(value: string): void {
        this.name = value;
    }

    public onDateChange(value: string) {
        this.date = value;
    }

    public onAmountChanged(value: string) {
        this.amount = parseFloat(value);
    }

    public onHeightChange(value: string) {
        this.height = parseFloat(value);
    }

    public onMilesChange(value: string) {
        this.miles = parseFloat(value);
    }
}
