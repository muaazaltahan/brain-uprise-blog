import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from 'src/app/state/users/reducer';
import { UsersEffects } from 'src/app/state/users/effects';
import { UsersComponent } from './users.component';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('users',reducer),
    EffectsModule.forFeature([UsersEffects])
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
