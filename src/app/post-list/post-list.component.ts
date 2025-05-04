import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';      // Pour *ngFor, *ngIf, pipes comme slice
import { FormsModule } from '@angular/forms';        // Pour [(ngModel)]
import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-post-list',
  standalone : true,
 imports : [CommonModule, FormsModule, RouterModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {

  posts: any[] =[];
  filteredPosts:any[]=[];
  searchTerm:string = '';
  selectedCategory: string='';
  categories: string[] = [];

  constructor(private postService: PostService){}

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((data) => {
      this.posts = data;
      this.filteredPosts = data;
      this.categories = [...new Set(data.map((post) => post.category))];
    });
  }


  filterPosts() {
    this.filteredPosts = this.posts.filter((post) =>
      post.title.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.selectedCategory ? post.category === this.selectedCategory : true)
    );





  }
}
