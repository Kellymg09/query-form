import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(public httpClient: HttpClient) { }

    public sigIn(user: any) {
        const url = 'https://api-backend.gshp-apps.com:40000/auth/login';
        return this.httpClient.post(url, user);
    }
}
