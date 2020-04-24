import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { IStory } from '../models/story.interface';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(
    private angularFirebaseDatabase: AngularFireDatabase
  ) { }

  activeSegment = new BehaviorSubject('');

  getStoryFromFirebase(categoryName: string): Observable<IStory[]> {
    return this.angularFirebaseDatabase.list<IStory>('/stories/' + categoryName).valueChanges();
  }

  getStoryDetailsFromFirebase(categoryName: string, storyName: string): Observable<IStory> {
    return this.angularFirebaseDatabase.object<IStory>('/stories/' + categoryName + '/' + storyName).valueChanges()
  }
}
