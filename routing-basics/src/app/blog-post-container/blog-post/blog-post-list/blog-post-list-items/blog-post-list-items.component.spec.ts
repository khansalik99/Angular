import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostListItemsComponent } from './blog-post-list-items.component';

describe('BlogPostListItemsComponent', () => {
  let component: BlogPostListItemsComponent;
  let fixture: ComponentFixture<BlogPostListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostListItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPostListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
