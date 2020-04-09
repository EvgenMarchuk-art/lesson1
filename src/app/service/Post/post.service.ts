
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../../models/UserModel';
import {Observable} from 'rxjs';
import {PostModel} from '../../models/PostModel';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private  http: HttpClient) {
  }

  getPosts(): Observable<PostModel[]>{

    return this.http.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
