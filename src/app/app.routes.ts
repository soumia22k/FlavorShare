import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import path from 'path';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

export const routes: Routes = [
    {path: "home", component:HomeComponent },
    {path: "recipe-list" , component:PostListComponent},
    {path: 'posts/:id', component:PostDetailComponent}
   
    
];

