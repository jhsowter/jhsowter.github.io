import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'blog-list',
  templateUrl: './blogList.component.html',
  styleUrls: ['./blogList.component.css']
})

export class BlogListComponent {
  private http: Http;
  constructor(http: Http){
    this.http = http;
    this.http.get("assets/posts").subscribe(ret => {
      console.log(JSON.stringify(ret));
    });
  }
  blogs = [{
    title: "On Writing",
    md: "OnWriting"
  }];
}
