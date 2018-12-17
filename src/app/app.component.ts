import { SubjectsPage } from './../pages/subjects/subjects';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { DepartmentgoalsPage } from '../pages/departmentgoals/departmentgoals';
import { TeacherprofilePage } from '../pages/teacherprofile/teacherprofile';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Nav) nav: Nav;
  activePage:any;
  inactive:any;
  pages: Array<{title: string, component: any}>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
      { title: 'الصفحه الرئيسيه', component: HomePage},
      { title: 'اهداف القسم', component: DepartmentgoalsPage },
      { title: 'صفحه التدريسيين', component: TeacherprofilePage },
      { title: 'المواد الدراسيه', component: SubjectsPage },
    ];
    this.activePage=this.pages[0];
  }
  check(p){
    return p == this.activePage;
  }
  checkm(p){
    let m=false;
     if(p != this.activePage){
       m=true;
     }
     return m;
     
  }
  openPage(p){
    this.nav.setRoot(p.component);
    this.activePage=p;
  }
}
