import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MainComponent,
  ContactsComponent,
  NotFoundComponent,
  HeaderComponent,
  FooterComponent,
} from './components';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [MainComponent, ContactsComponent, NotFoundComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
