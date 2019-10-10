import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { StatsRoutes } from '@modules/stats/stats-routing.module';
import { StatsComponent } from './page/stats/stats.component';



@NgModule({
  declarations: [StatsComponent],
  imports: [
    StatsRoutes,

    SharedModule
  ]
})
export class StatsModule { }
