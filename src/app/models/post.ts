import { Comment } from "./comment";
import { User } from "./user";

export class Post{
  id: number;
  title: string;
  content: string;
  date: string;
  author: User;
  comments: Comment[]
}
