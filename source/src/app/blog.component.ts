import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  private route;
  public blog;
  constructor(route: ActivatedRoute){
    this.route = route;
    this.route.params.subscribe(params => this.blog = "assets/posts/" + params['id']  + ".md");
  }
}
