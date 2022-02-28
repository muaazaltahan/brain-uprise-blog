import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseComponent } from './base/base.component';
import { PostsModule } from './views/posts/posts.module';
import { HomeComponent } from './views/home/home.component';
import { SidebarComponent } from './views/sidebar/sidebar.component';
import { ToggleSideBarDirective } from './directives/toggle-side-bar.directive';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './views/users/users.module';
import { SelectedPostComponent } from './views/selected-post/selected-post.component';
import { CommentComponent } from './views/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    HomeComponent,
    SidebarComponent,
    ToggleSideBarDirective,
    SelectedPostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    FontAwesomeModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    HttpClientModule,
    PostsModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
