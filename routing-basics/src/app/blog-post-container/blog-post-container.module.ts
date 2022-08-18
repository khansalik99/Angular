import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPostContainerRoutingModule } from './blog-post-container-routing.module';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostListItemsComponent } from './blog-post/blog-post-list/blog-post-list-items/blog-post-list-items.component';
import { BlogPostListComponent } from './blog-post/blog-post-list/blog-post-list.component';


@NgModule({
  declarations: [
    BlogPostComponent,
    BlogPostListItemsComponent,
    BlogPostListComponent
  ],
  imports: [
    CommonModule,
    BlogPostContainerRoutingModule
  ]
})
export class BlogPostContainerModule { }
