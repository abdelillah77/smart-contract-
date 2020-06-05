import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post = {
    id: 0,
    name: '',
    email: ''

  };

  isEdit: boolean = false;

  constructor(private postService: PostService) { }

  ngOnInit() {

    this.postService.getPosts().subscribe(posts => {

      this.posts = posts;

    })

  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  editPost(post: Post) {

    this.currentPost = post;
    this.isEdit = true;
  }

  removePost(post: Post) {
    if (confirm('manaytak ?')) {
      this.postService.removePost(post.id).subscribe(() => {
        this.posts.forEach((cur, index) => {
          if (post.id === cur.id) {
            this.posts.splice(index, 1);


          }
        });
      });
    }

  }


}

