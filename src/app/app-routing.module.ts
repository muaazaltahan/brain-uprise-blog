import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { HomeComponent } from './views/home/home.component';
import { PostsComponent } from './views/posts/posts.component';
import { SelectedPostComponent } from './views/selected-post/selected-post.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'blog', component: BaseComponent, children: [
    {path: '', component: PostsComponent},
    {path: 'posts/:id', component: SelectedPostComponent}
  ]},
  // {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
