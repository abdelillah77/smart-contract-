import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/observable';

import { Post } from '../models/Post';


const httpOption = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class PostService {

   postsUrl: string = 'https://jsonplaceholder.typicode.com/users';

   constructor(private http: HttpClient) { }

   getPosts(): Observable<Post[]> {

      return this.http.get<Post[]>(this.postsUrl);
   }

   savePost(post: Post): Observable<Post> {
      return this.http.post<Post>(this.postsUrl, post, httpOption)

   }

   removePost(post: Post | number): Observable<Post> {
      const id = typeof post === 'number' ? post : post.id;
      const url = ` ${this.postsUrl}/${id} `;

      return this.http.delete<Post>(url, httpOption);

   }

   title
}

