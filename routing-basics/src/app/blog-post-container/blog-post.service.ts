import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
  public blogpostList :Array<string> =['Trip to Lahore','Trip to karachi','trip to peshawar'];
  constructor() { }
}
