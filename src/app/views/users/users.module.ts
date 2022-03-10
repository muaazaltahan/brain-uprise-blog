import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from 'src/app/state/users/reducer';
import { UsersEffects } from 'src/app/state/users/effects';
import { UsersComponent } from './users.component';
import { SelectedUserComponent } from './selected-user/selected-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserPostsComponent } from './selected-user/user-posts/user-posts.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UsersComponent,
    SelectedUserComponent,
    UserPostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('users',reducer),
    EffectsModule.forFeature([UsersEffects]),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
