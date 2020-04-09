import {Component, Input, OnInit} from '@angular/core';
import {CommentModels} from '../../models/CommentModels';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: CommentModels;

  constructor() { }

  ngOnInit(): void {
  }

}
