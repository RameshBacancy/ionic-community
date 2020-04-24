import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IStory } from 'src/app/models/story.interface';
import { StoryService } from 'src/app/service/story.service';
import { ShareService } from 'src/app/service/share.service';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.page.html',
  styleUrls: ['./story-detail.page.scss'],
})
export class StoryDetailPage implements OnInit {

  constructor(
    private router: Router,
    private shareService: ShareService,
    private storyService: StoryService,
    private activatedRoute: ActivatedRoute
  ) { }

  categoryName: string;
  storyName: string;
  story: IStory;

  showSpinner: boolean = true;

  ngOnInit() {
    this.categoryName = this.activatedRoute.snapshot.paramMap.get('categoryName');
    this.storyName = this.activatedRoute.snapshot.paramMap.get('storyName');
    this.storyService.getStoryDetailsFromFirebase(this.categoryName, this.storyName).subscribe(story => {
      this.story = story
      this.showSpinner = false;
    })
  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }

  shareStory() {
    this.shareService.options = {
      message: this.story.storyName + "\n" + this.story.content.substring(0, 99) + '...',
      subject: '',
      files: '',
      url: 'https://play.google.com/store',
      chooserTitle: ''
    }
    this.shareService.shareApp()
  }
}
