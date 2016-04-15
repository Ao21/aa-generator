import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'app',
    template: '<h1>Hello</h1>'
})
export class App implements OnInit {
    constructor() {

    }
    ngOnInit() {
        //console.log('Initial App State', this.appState.state);
    }
}
