import { NgModule } from '@angular/core';
import { AddpostComponent } from './addpost.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [AddpostComponent],
  imports: [
    BrowserModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddpostModule { }
