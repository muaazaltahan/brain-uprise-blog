import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCogs, faHome, faList, faPlusCircle, faQuestionCircle, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { loadUsers } from '../state/users/actions';
import { loadPosts } from '../state/posts/actions';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor(private router: Router, private store: Store) {}

  home = faHome;
  user = faUserCircle;
  settings = faCogs;
  about = faQuestionCircle;
  addPost = faPlusCircle;
  list = faList;
  search = faSearch;

  showSidebar = false;

  goTo(path: string) {
    this.router.navigate([path]);
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    this.store.dispatch(loadPosts());
  }

}
