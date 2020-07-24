import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../types/user';
import { Album } from '../types/album';
import { Photo } from '../types/photo';

@Injectable()
export class UserService {

  private url: string = 'http://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + '/users').pipe(map((res) => res));
  }

  public getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.url + '/albums').pipe(map((res) => res));
  }

  public getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.url + '/photos').pipe(map((res) => res));
  }
}