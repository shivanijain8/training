import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LearningComponent } from './learning/learning.component';
import { SessionComponent } from './session/session.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    LearningComponent,
    SessionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
