import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommentModels} from '../../models/CommentModels';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CommentService {

  constructor(private  http: HttpClient) {
  }

  getComments(): Observable<CommentModels[]>{
    return this.http.get<CommentModels[]>('https://jsonplaceholder.typicode.com/comments');
  }

}
