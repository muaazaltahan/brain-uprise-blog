import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCogs, faHome, faList, faPlusCircle, faQuestionCircle, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {

  constructor(private router: Router) {}

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

}
