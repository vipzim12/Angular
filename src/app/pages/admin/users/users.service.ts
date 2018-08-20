import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { users } from './users';

@Injectable({
    providedIn: 'root'
  })
export class UsersService {
    private baseUrl: string = 'http://localhost:8080/pages/users';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private _httpClient: HttpClient) { }

    getUsers() {
        return this._httpClient.get<users>(this.baseUrl + '/show').pipe(
            map(data => data)
        )
      }
    deleteUser(user:users){
        return this._httpClient.delete(this.baseUrl + '/delete/'+user.id);
    }

}