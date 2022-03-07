import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { selectPostById, PostState } from 'src/app/state/posts/reducer';

@Component({
  selector: 'app-selected-post',
  templateUrl: './selected-post.component.html',
  styleUrls: ['./selected-post.component.scss']
})
export class SelectedPostComponent implements OnInit {

  constructor(private store: Store<PostState>, private route: ActivatedRoute) { }

  selectedPostId: string;

  selectedPost: Observable<Post>;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedPostId = params.id;
    });
    this.selectedPost = this.store.select(selectPostById(this.selectedPostId));
  }

}
