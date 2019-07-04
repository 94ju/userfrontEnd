import { Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService{
    constructor(private http:Http){}

    onGetUser(){
        return this.http.get("http://localhost:3000/users").pipe(map(
            (response:Response)=>{
                const user =response.json();
                return user;
            }
        )) 
    }


    onGetUsers(){
        return this.http.get("http://localhost:3000/users").pipe(map(
            (response:Response)=>{
                const users=response.json();
                return users;
            }
        ))
    }
}