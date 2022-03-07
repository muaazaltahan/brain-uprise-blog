import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { getUserById, UserState } from 'src/app/state/users/reducer';

@Component({
  selector: 'app-selected-user',
  templateUrl: './selected-user.component.html',
  styleUrls: ['./selected-user.component.scss']
})
export class SelectedUserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private store: Store<UserState>) { }

  selectedUserId: string;
  selectedUser: Observable<User>;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedUserId = params.id;
    })
    this.selectedUser = this.store.select(getUserById(this.selectedUserId));
  }

}
