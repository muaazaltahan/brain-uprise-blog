import { Comment } from "./comment";
import { User } from "./user";

export class Post{
  id: string;
  title: string;
  content: string;
  date: string;
  imageSrc: string;
  categories: string[];
  author: User;
  comments: Comment[]
}
