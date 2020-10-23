import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(public router: Router) { }
    canActivate(): boolean {
        const logged = sessionStorage.getItem('user');
        if (!logged) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
