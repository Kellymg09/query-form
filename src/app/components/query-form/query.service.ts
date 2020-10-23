import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class QueryService {
    public headersObject;

    constructor(public httpClient: HttpClient) {
        this.headersObject = {
            'Content-Type': 'application/json; charset=utf-8',
            'Accept': 'application/json',
            'Authorization': `Bearer ${this.getToken()}`,
        };
    }

    public saveQuery(query: any) {
        const url = 'https://api-backend.gshp-apps.com:40000/query';
        return this.httpClient.post(url, query, { headers: this.headersObject });
    }

    public approveQuery(query: any) {
        const url = 'https://api-backend.gshp-apps.com:40000/query/approve-query';
        return this.httpClient.post(url, query, { headers: this.headersObject });
    }

    public rejectQuery(query: any) {
        const url = 'https://api-backend.gshp-apps.com:40000/query/reject-query';
        return this.httpClient.post(url, query, { headers: this.headersObject });
    }

    public getDatabases() {
        const url = 'https://api-backend.gshp-apps.com:40000/db';
        return this.httpClient.get(url, { headers: this.headersObject });
    }

    public getPendingQueries() {
        const url = 'https://api-backend.gshp-apps.com:40000/query/pending-queries';
        return this.httpClient.get(url, { headers: this.headersObject });
    }

    public getUserPendingQueries(user: any) {
        const url = 'https://api-backend.gshp-apps.com:40000/query/user-pending-queries';
        return this.httpClient.post(url, user, { headers: this.headersObject });
    }

    getToken() {
        return JSON.parse(sessionStorage.getItem('user'))?.access_token;
    }
}
