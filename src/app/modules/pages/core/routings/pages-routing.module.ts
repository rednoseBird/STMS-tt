import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PagesRoutingMap } from 'modules/pages/core/routings/pages-routing.map';

@NgModule({
  imports: [RouterModule.forChild(PagesRoutingMap)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
