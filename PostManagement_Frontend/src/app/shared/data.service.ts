import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url :string = 'http://localhost:3000/post';
  constructor(private http: HttpClient) {}

  // Get all Post
  getAllPost() : Observable<Post[]>{
    return this.http.get<Post[]>(this.url);
  }

  // Get Post By Id
  getPostById(id:string) : Observable<Post>{
    return this.http.get<Post>(this.url+'/'+id);
  }

  // Delete Post By Id
  deletePostById(id:string) : Observable<Post>{
    return this.http.delete<Post>(this.url+'/'+id);
  }

  // Update Post
  updatePost(post:Post) : Observable<Post>{
    return this.http.put<Post>(this.url+'/'+post._id, post);
  }

  // Create Post
  createPost(post : Post) : Observable<Post>{
    return this.http.post<Post>(this.url,post);
  }
}
