import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { getPosts } from 'src/app/state/posts/reducer';
import { set } from 'src/app/state/selected-post/actions';
import { getUserById } from 'src/app/state/users/reducer';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  constructor(private store: Store, private router: Router) { }

  goTo(path: string, post: Post) {
    this.router.navigate([path]);
    this.setSelectedPost(post);
  }

  setSelectedPost(post: Post) {
    this.store.dispatch(set({post}))
  }

  getUser(id: string) {
    // return this.store.select(getUserById(id));
  }

  posts: Observable<Post[]> = this.store.select(getPosts);

}
