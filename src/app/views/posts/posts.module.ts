import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/state/posts/reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from 'src/app/state/posts/effects';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forFeature('posts',reducer),
    EffectsModule.forFeature([PostsEffects]),
    FontAwesomeModule,
    SharedModule
  ],
  exports: [PostsComponent]
})
export class PostsModule { }
