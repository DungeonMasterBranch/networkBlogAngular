import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {PostPayload} from "../add-post/post-payload";
import {HttpClient} from "@angular/common/http";
import {CommentPayload} from "./comment-payload";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }

  addComment(commentPayload: CommentPayload) {
    return this.httpClient.post('http://localhost:8080/api/posts/comments/add/', commentPayload);
  }

  getAllCommentsOfPost(permaLink: Number): Observable<Array<CommentPayload>> {
    return this.httpClient.get<Array<CommentPayload>>('http://localhost:8080/api/posts/comments/get/' + permaLink);
  }
}
