import { Component, OnInit } from '@angular/core';
import { IStory } from 'src/app/models/story.interface';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/service/category.service';
import { ICategory } from 'src/app/models/category.interface';
import { ActionSheetController } from '@ionic/angular';

import { Camera, PictureSourceType, CameraOptions } from '@ionic-native/camera/ngx'

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.page.html',
  styleUrls: ['./add-story.page.scss'],
})
export class AddStoryPage implements OnInit {

  constructor(
    private camera: Camera,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private actionSheetController: ActionSheetController
  ) { }

  selectedImage: string = '';
  story: IStory;
  addStoryForm: FormGroup;
  selectedCategory: string;
  showSpinner: boolean = true;
  categories: ICategory[] = [];

  ngOnInit() {
    this.categoryService.getCategoriesFromFirebase().subscribe(data => {
      this.categories = data
      this.selectedCategory = this.categories[0].categoryName
      this.addStoryForm = this.formBuilder.group({
        storyName: ['', Validators.required],
        category: [this.selectedCategory],
        content: ['', Validators.required]
      })
      this.showSpinner = false;
    })
  }

  async imagePickerSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select image source',
      buttons: [
      {
        text: 'Camera',
        icon: 'camera-outline',
        handler: () => {
          this.takeImage(this.camera.PictureSourceType.CAMERA);
        }
      }, {
        text: 'Device',
        icon: 'phone-portrait-outline',
        handler: () => {
          this.takeImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Cancel',
        icon: 'close-circle-outline',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  async categoryPickerSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select category',
      buttons: [
      {
        text: this.categories[0].categoryName,
        handler: () => {
          this.changeCategory(this.categories[0].categoryName)
        }
      }, {
        text: this.categories[1].categoryName,
        handler: () => {
          this.changeCategory(this.categories[1].categoryName)
        }
      },
      {
        text: this.categories[2].categoryName,
        handler: () => {
          this.changeCategory(this.categories[2].categoryName)
        }
      }, {
        text: 'Your Story',
        handler: () => {
          this.changeCategory('Your Story')
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  addStory() {
    this.story = {
      storyName: this.addStoryForm.controls['storyName'].value,
      content: this.addStoryForm.controls['content'].value,
      storyImage: this.selectedImage,
      timestamp: 0,
      category: this.addStoryForm.controls['category'].value,
      likes: 0
    }
  }

  changeCategory(category: string) {
    this.addStoryForm.patchValue({
      category: category
    })
  }

  takeImage(sourceType: PictureSourceType) {
    var options: CameraOptions = {
      quality: 100,
      allowEdit: true,
      targetWidth: 300,
      targetHeight: 300,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL
    }

    this.camera.getPicture(options)
    .then(imagePath => {
      this.selectedImage = "data:image/jpeg;base64," + imagePath
    })
  }
}
