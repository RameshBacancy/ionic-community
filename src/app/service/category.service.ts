import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ICategory } from '../models/category.interface';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private angularFirebaseData: AngularFireDatabase
  ) { }

  getCategoriesFromFirebase(): Observable<ICategory[]> {
    return this.angularFirebaseData.list<ICategory>('/categories').valueChanges();
  }
}
