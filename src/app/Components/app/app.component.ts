import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../../models/UserModel';
import {UserService} from '../../service/User/user.service';
import {PostService} from '../../service/Post/post.service';
import {PostModel} from '../../models/PostModel';
import {CommentService} from '../../service/Comment/comment.service';
import {CommentModels} from '../../models/CommentModels';
import {iterator} from 'rxjs/internal-compatibility';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.components.css']
})



export class AppComponent {
  msg = ' users';

  users: UserModel[] = [] ;


  constructor(private userService: UserService,
              private postService: PostService,
              private commentService: CommentService) {
    this.userService.getUsers().subscribe(users => {
      this.postService.getPosts().subscribe(posts => {
        this.commentService.getComments().subscribe(comments => {
          for (const user of users) {
            user.posts = [];
            for (const post of posts) {
              if (post.userId === user.id) {
                user.posts.push(post);
                post.comments = [];
                for (const comment of comments) {
                  if (comment.postId === post.id) {
                    post.comments.push(comment);
                  }
                }
              }
            }
            this.users.push(user);
          }
          console.log(this.users);
        });
      });
    });
  }
}
