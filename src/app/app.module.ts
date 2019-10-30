import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstscreenComponent } from './firstscreen/firstscreen.component';
import { FirstmainComponent } from './firstmain/firstmain.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CreatquizComponent } from './creatquiz/creatquiz.component';
import { LivepreviewComponent } from './livepreview/livepreview.component';
import { SecondmainComponent } from './secondmain/secondmain.component';
import { OutcomeComponent } from './outcome/outcome.component';
import { Livepreview2Component } from './livepreview2/livepreview2.component';
import {CreateQuizService} from './create-quiz.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstscreenComponent,
    FirstmainComponent,
    SidebarComponent,
    CreatquizComponent,
    LivepreviewComponent,
    SecondmainComponent,
    OutcomeComponent,
    Livepreview2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CreateQuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
