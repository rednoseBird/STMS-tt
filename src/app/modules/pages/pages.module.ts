import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PagesRoutingModule } from './core/routings/pages-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DraggableDirective } from 'modules/pages/shared/dragabble.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule
  ],
  declarations: [
    DraggableDirective,
    HomeComponent
  ]
})
export class PagesModule { }
