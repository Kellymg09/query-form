import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    public headersObject;

    constructor(public httpClient: HttpClient) {
        this.headersObject = {
            'Content-Type': 'application/json; charset=utf-8',
            'Accept': 'application/json',
            'Authorization': `Bearer ${this.getToken()}`,
        };
     }

    public createUser(user: any) {
        const url = 'https://api-backend.gshp-apps.com:40000/user';
        return this.httpClient.post(url, user, { headers: this.headersObject });
    }

    public getAllUsers() {
        const url = 'https://api-backend.gshp-apps.com:40000/user/get';
        return this.httpClient.get(url, { headers: this.headersObject });
    }

    getToken() {
        return JSON.parse(sessionStorage.getItem('user'))?.access_token;
    }
}
