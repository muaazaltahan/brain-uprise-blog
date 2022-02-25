import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedPostComponent } from './selected-post.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/state/selected-post/reducer';


@NgModule({
  declarations: [
    SelectedPostComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('selectedPost',reducer)
  ],
  exports: [
    SelectedPostComponent
  ]
})
export class SelectedPostModule { }
