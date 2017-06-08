import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog.component';
import { BlogListComponent } from './blogList.component';
import { PageNotFoundComponent } from './pageNotFound.component';
import { MarkdownModule  } from 'angular2-markdown';  

const appRoutes = [
  { 
    path: 'post/:id',      
    component: BlogComponent 
  },{
    path: "",
    component: BlogListComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MarkdownModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
