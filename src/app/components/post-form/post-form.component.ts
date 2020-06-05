import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { tick } from '@angular/core/testing';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post: Post;
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit: boolean;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }
  addPost(name, email) {

    if (!name) {
      alert('ha 3amar ha 3amar');
    } else {

      this.postService.savePost({ name, email } as Post).subscribe
        (post => {

          this.newPost.emit(post);

        });
    }
  }

  updatePost() {
    this.isEdit = false;
    console.log(321)
  }

}
