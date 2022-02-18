import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AddPostService} from '../add-post.service';
import {PostPayload} from '../add-post/post-payload';
import {CommentPayload} from "./comment-payload";
import {Observable} from "rxjs";
import {CommentService} from "./comment.service";
import {FormControl, FormGroup} from "@angular/forms";

// @ts-ignore
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  addCommentForm: FormGroup;
  commentPayload:CommentPayload;
  post!: PostPayload;
  permaLink!: Number;
  comments!: Observable<Array<CommentPayload>>;
  commentTextArea = new FormControl('');


  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService, private postService: AddPostService) {
    this.addCommentForm = new FormGroup({
      commentTextArea: this.commentTextArea,
    });
    this.commentPayload = {
      post_id:0,
      content: '',
      author_username: '',
      createdOn:''
    }
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.permaLink = params['id'];
    });

    this.postService.getPost(this.permaLink).subscribe((data:PostPayload) => {
      this.post = data;
    },(err: any) => {
      console.log('Failure Response');
    })

    this.comments = this.commentService.getAllCommentsOfPost(this.permaLink)

  }

  addComment(){
    this.commentPayload.content = this.addCommentForm.get('commentTextArea')!.value;
    this.commentPayload.post_id = this.permaLink;
    this.commentService.addComment(this.commentPayload).subscribe(data => {
      location.reload()
    }, error => {
      console.log('Failure Response');
    })
  }
}
