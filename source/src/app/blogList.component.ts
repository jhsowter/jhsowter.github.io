import { Component } from '@angular/core';

@Component({
  selector: 'blog-list',
  templateUrl: './blogList.component.html',
  styleUrls: ['./blogList.component.css']
})

export class BlogListComponent {
  blogs = [{
    title: "first",
    md: "20170606"
  }];

}
