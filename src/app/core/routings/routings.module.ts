import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RoutingMap } from './routing.map';

@NgModule({
  imports: [RouterModule.forRoot(RoutingMap)],
  exports: [RouterModule]
})
export class AppRoutingsModule { }
