import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private postService: PostService) {
  }

  ngOnInit() {
  }

  addPost(title: string, body: string) {
    if (!title || !body) {
      alert('Plese add post and body');
    } else {
      this.postService.savePost({title, body} as Post).subscribe((post => {
        console.log(post);
      }));
    }
  }
}