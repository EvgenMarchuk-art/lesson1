import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../../models/UserModel';
import {UserService} from '../../service/User/user.service';
import {PostService} from '../../service/Post/post.service';
import {PostModel} from '../../models/PostModel';
import {CommentService} from '../../service/Comment/comment.service';
import {CommentModels} from '../../models/CommentModels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.components.css']
})



export class AppComponent {
  msg = ' users';

  users: UserModel[] ;
  posts: PostModel[];
  comments: CommentModels[];

  constructor( private userService: UserService,
               private postService: PostService,
               private commentService: CommentService ) {
    this.userService.getUsers().subscribe(value => this.users = value);
    this.postService.getPosts().subscribe(value => this.posts = value);
    this.commentService.getComments().subscribe(value => this.comments = value);
  }

}
