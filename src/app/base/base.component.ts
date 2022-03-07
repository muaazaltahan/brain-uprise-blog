import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faHome, faList, faPlusCircle, faQuestionCircle, faUserCircle, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {

  constructor(private router: Router, private store: Store) {}


  // Font Awesome Icons
  home = faHome;
  user = faUserCircle;
  users = faUsers;
  about = faQuestionCircle;
  addPost = faPlusCircle;

  // Navigations
  goTo(path: string) {
    this.router.navigate([path]);
  }

}
