import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})


export class CursosGuardService implements CanActivateChild {
    constructor() { }
    
    public canActivateChild(): Observable<boolean> | boolean {
        return true;
    }
}