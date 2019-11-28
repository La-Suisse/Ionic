import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class AppBack {

    constructor(private http: HttpClient) { }

    getUsers(): any {
        return this.http.get("http://127.0.0.1:8000/apiusers");
    }

    getFiches(): any {
        return this.http.get("http://127.0.0.1:8000/apifiches");
    }
}