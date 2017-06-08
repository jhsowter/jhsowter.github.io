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
  public title;
  constructor(route: ActivatedRoute){
    this.route = route;
    this.route.params.subscribe(params => 
    {
      this.title = params["id"];
      this.blog = "assets/posts/" + this.title  + ".md"
    });
  }
}
