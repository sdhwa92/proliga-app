import { Routes, RouterModule } from '@angular/router';
import { StatsComponent } from '@modules/stats/page/stats/stats.component';
import { StatsResolver } from '@modules/stats/stats-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: StatsComponent,
    resolve: {
      statsData: StatsResolver
    }
  }
];

export const StatsRoutes = RouterModule.forChild(routes);
