import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherInfoPage } from './teacher-info';

@NgModule({
  declarations: [
    TeacherInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherInfoPage),
  ],
})
export class TeacherInfoPageModule {}
