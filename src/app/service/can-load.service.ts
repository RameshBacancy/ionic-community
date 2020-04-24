import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CanLoadService implements CanLoad {

    constructor() { }

    value: boolean = true;

    canLoad(): boolean {
        return this.value
    }
}
