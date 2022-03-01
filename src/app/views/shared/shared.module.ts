import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './author/author.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AuthorComponent,
    CommentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuthorComponent,
    CommentComponent
  ]
})
export class SharedModule { }
