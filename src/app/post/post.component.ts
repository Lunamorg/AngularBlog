import { Component, OnInit, Input } from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
 
  @Input() postTitle: string;
  @Input() postContent: string; 
  @Input() postDate: Date;
  @Input() postLoveIt: number;

  constructor() {
    
  }

  ngOnInit() {
  }

  getPostContent() {
    return this.postContent;
  }

  getDate() {
    return this.postDate;
  }

  getTextColor() {
    console.log(this.postLoveIt);
    if (this.postLoveIt > 0) return 'green';
    if (this.postLoveIt < 0) return 'red';

    return 'black';
  }

  getPostLoveIt() {
    return this.postLoveIt;
  }

  setLoveIt(amount: number) {
    this.postLoveIt += amount;
  }
}
