import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/state/posts/reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from 'src/app/state/posts/effects';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('posts',reducer),
    EffectsModule.forFeature([PostsEffects])
  ],
  exports: [PostsComponent]
})
export class PostsModule { }
