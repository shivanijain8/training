import { Component } from '@angular/core';

@Component({
    selector: 'app-learning',
    templateUrl: './learning.component.html',
    styleUrls: ['./learning.component.css']
})

export class LearningComponent {
    constructor() {
        setTimeout(() => {
            this.allowButton = false;
        }, 2000);
    }
    type1: String = 'String interpolation';
    addValue: String;
    allowButton = true;
    showText = false;
    textValue: String;
    getString() {
        this.addValue = 'String interpolation from function';
        return this.addValue;
    }
    onButtonClick() {
        this.showText = !this.showText;
        if ( this.showText === true) {
                    this.textValue = 'hide';
        }
    }
}
