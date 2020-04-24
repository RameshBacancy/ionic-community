import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IStory } from 'src/app/models/story.interface';
import { StoryService } from 'src/app/service/story.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.page.html',
  styleUrls: ['./story-list.page.scss'],
})
export class StoryListPage implements OnInit {

  constructor(
    private router: Router,
    private storyService: StoryService
  ) { }

  stories: IStory[] = []
  showSpinner: boolean = true

  ngOnInit() {
    this.getStories()
  }

  getStories() {
    this.storyService.activeSegment.subscribe(activeSegment => {
      console.log(activeSegment)
      this.storyService.getStoryFromFirebase(activeSegment).subscribe(data => {
        this.stories = data
        this.showSpinner = false
      })
    })
  }

  navigateToStoryDetail(story: IStory) {
    this.router.navigate(['/storydetail', story.category, story.storyName])
  }
}
