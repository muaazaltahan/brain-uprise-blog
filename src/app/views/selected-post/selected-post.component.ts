import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { getSelectedPost } from 'src/app/state/selected-post/reducer';

@Component({
  selector: 'app-selected-post',
  templateUrl: './selected-post.component.html',
  styleUrls: ['./selected-post.component.scss']
})
export class SelectedPostComponent {

  selectedPost: Observable<Post> = this.store.select(getSelectedPost);

  constructor(private store: Store) { }

}
