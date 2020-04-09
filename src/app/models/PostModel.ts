import {CommentModels} from './CommentModels';

export class PostModel{
  userId: number;
  id: number;
  title: string;
  body: string;
  comments: CommentModels[] = [];
}

