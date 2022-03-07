import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { combineLatest, debounceTime, map, Observable, startWith } from 'rxjs';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { setSelectedPostId } from 'src/app/state/posts/actions';
import { getPosts, PostState } from 'src/app/state/posts/reducer';
import { getUserById } from 'src/app/state/users/reducer';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  constructor(private store: Store<PostState>, private router: Router) { }

  search = faSearch;

  searchControl = new FormControl();

posts: Observable<Post[]> = combineLatest([
  this.store.select(getPosts),
  this.searchControl.valueChanges.pipe(
    debounceTime(250),
    startWith(''),
  )
]).pipe(
  map(([ posts, searchValue ]) => posts.filter(post => {
    return post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      post.content.toLowerCase().includes(searchValue.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      post.categories.includes(searchValue.toLowerCase())
  })
  )
);

  goTo(path: string, post: Post) {
    this.router.navigate([path]);
    this.setSelectedPost(post.id);
  }

  setSelectedPost(id: string) {
    this.store.dispatch(setSelectedPostId({id}));
  }

  getUser(id: string): Observable<User> {
    return this.store.select(getUserById(id));
  }

}
