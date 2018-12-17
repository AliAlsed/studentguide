import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DepartmentgoalsPage } from '../pages/departmentgoals/departmentgoals';
import { SubjectsPage } from '../pages/subjects/subjects';
import { TeacherprofilePage } from '../pages/teacherprofile/teacherprofile';
import { FormsModule } from '@angular/forms';
import { TeacherInfoPage } from '../pages/teacher-info/teacher-info';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    DepartmentgoalsPage,
    TeacherprofilePage,
    SubjectsPage,
    TeacherInfoPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    DepartmentgoalsPage,
    TeacherprofilePage,
    TeacherInfoPage,
    SubjectsPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
