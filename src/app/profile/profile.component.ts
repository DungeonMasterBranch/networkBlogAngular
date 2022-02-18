import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {PostPayload} from "../add-post/post-payload";
import {AddPostService} from "../add-post.service";
import {ActivatedRoute} from "@angular/router";
import {LocalStorageService} from "ngx-webstorage";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId!: Number;
  myposts!: Observable<Array<PostPayload>>;
  constructor(private postService: AddPostService, private activatedRoute: ActivatedRoute, private localStorageService: LocalStorageService) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {

      this.userId = params['userId'];
    });

    this.myposts = this.postService.getAllPostsOfUser(this.userId);
  }
}
