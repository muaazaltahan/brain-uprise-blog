import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { AboutComponent } from './views/about/about.component';
import { HomeComponent } from './views/home/home.component';
import { PostsComponent } from './views/posts/posts.component';
import { SelectedPostComponent } from './views/posts/selected-post/selected-post.component';
import { SelectedUserComponent } from './views/users/selected-user/selected-user.component';
import { UsersComponent } from './views/users/users.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'blog', component: BaseComponent, children: [
    {path: '', component: PostsComponent},
    {path: 'posts/:id', component: SelectedPostComponent},
    {path: 'users', component: UsersComponent},
    {path: 'users/:id', component: SelectedUserComponent}
  ]},
  {path: 'about-me', component: AboutComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
