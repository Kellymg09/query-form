import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AdminGuardService implements CanActivate {
    constructor(public router: Router) { }
    canActivate(): boolean {
        const isAdmin = JSON.parse(sessionStorage.getItem('user')).roleId === 1;
        if (!isAdmin) {
            this.router.navigate(['my-queries']);
            return false;
        }
        return true;
    }
}
