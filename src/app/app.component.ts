import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPosts } from './state/posts/actions';
import { loadUsers } from './state/users/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    this.store.dispatch(loadPosts());
  }

}
