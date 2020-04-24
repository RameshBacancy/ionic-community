import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CanLoadService } from './service/can-load.service';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'splashscreen',
    pathMatch: 'full' 
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('./pages/splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule),
    canLoad: [CanLoadService]
  },
  {
    path: 'introduction',
    loadChildren: () => import('./pages/introduction/introduction.module').then( m => m.IntroductionPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'addstory',
    loadChildren: () => import('./pages/add-story/add-story.module').then( m => m.AddStoryPageModule)
  },
  {
    path: 'storydetail/:categoryName/:storyName',
    loadChildren: () => import('./pages/story-detail/story-detail.module').then( m => m.StoryDetailPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
