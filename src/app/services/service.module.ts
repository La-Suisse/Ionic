import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class AppBack {

    constructor(private http: HttpClient) { }

    getUsers(): any {
        return this.http.get("http://192.168.135.201/public/index.php/apiusers");
    }

    getFiches(): any {
        return this.http.get("http://192.168.135.201/public/index.php/apifiches");
    }
}