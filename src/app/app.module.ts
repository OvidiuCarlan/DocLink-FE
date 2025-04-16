import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreatePostCardComponent } from './components/create-post-card/create-post-card.component';

@NgModule({
    imports: [
      BrowserModule,
      ReactiveFormsModule,
      AppComponent,            
      CreatePostCardComponent      
    ],
  })
  export class AppModule { }