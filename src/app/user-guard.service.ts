import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class UserGuardService implements CanActivate {
    constructor(public router: Router) { }
    canActivate(): boolean {
        const isAdmin = JSON.parse(sessionStorage.getItem('user')).roleId === 2;
        if (!isAdmin) {
            this.router.navigate(['pending-queries']);
            return false;
        }
        return true;
    }
}
