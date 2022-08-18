import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../../blog-post.service';
//import {BlogPostService } from './blog-post-container/blog-post.service'; 
@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.css'],
  providers : [BlogPostService]
})
export class BlogPostListComponent implements OnInit {

  constructor(private BlogPostService  : BlogPostService ) { }

  ngOnInit(): void {
    console.log("from hereinit",this.BlogPostService.blogpostList);
  }
  onClick(){
    console.log("from here",this.BlogPostService.blogpostList);
  }
}
