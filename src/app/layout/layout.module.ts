import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MainComponent,
  ContactsComponent,
  NotFoundComponent,
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
} from './components';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    MainComponent,
    ContactsComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
