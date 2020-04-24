import { Component, OnInit } from '@angular/core';
import { StoryService } from 'src/app/service/story.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  activeSegment = 'Baby Health';

  constructor(
    private storyService: StoryService,
  ) { }

  ngOnInit() {
    this.storyService.activeSegment.next(this.activeSegment)
  }

  segmentChanged(event: any) {
    this.activeSegment = event.target.value
    this.storyService.activeSegment.next(this.activeSegment)
  }
}