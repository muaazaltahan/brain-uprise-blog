import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, debounceTime, map, Observable, startWith } from 'rxjs';
import { User } from 'src/app/models/user';
import { getUsers, UserState } from 'src/app/state/users/reducer';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  constructor(private store: Store<UserState>, private router: Router) { }

  searchControl = new FormControl('')

  users: Observable<User[]> = combineLatest([
    this.store.select(getUsers),
    this.searchControl.valueChanges.pipe(
      debounceTime(250),
      startWith('')
    )
  ]).pipe(
    map(([users, searchValue]) => users.filter(
        user => user.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    )
  );

  goTo(path: string) {
    this.router.navigate([path]);
  }

}
