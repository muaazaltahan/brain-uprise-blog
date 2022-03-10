import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { getPosts } from 'src/app/state/posts/reducer';
import { getSelectedUserId } from 'src/app/state/users/reducer';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent {

  constructor(private store: Store) { }

  posts: Observable<Post[]> = combineLatest([
    this.store.select(getPosts),
    this.store.select(getSelectedUserId)
  ]).pipe(
    map(([posts, userId]) =>
      posts.filter(
        post => post.author.id == userId
      )
    )
  );

}
