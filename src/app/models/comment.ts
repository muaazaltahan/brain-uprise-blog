import { User } from "./user";

export class Comment{
  id: number;
  content: string;
  date: string;
  author: User;
  replies?: Comment[];
}
