import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageInscriptionComponent} from "./pages/page-inscription/page-inscription.component";
import {PageDashboardComponent} from "./pages/page-dashboard/page-dashboard.component";
import {PageStatisticComponent} from "./pages/page-statistic/page-statistic.component";
import {PageAlimentComponent} from "./pages/page-aliment/page-aliment.component";
import {NouvelAlimentComponent} from "./pages/aliment/nouvel-aliment/nouvel-aliment.component";

const routes: Routes = [
  {
    path : 'login',
    component : PageLoginComponent
  },
  {
    path : 'inscription',
    component : PageInscriptionComponent
  },
  {
    path : '',
    component : PageDashboardComponent,
    children : [
      {
        path : 'statistic',
        component : PageStatisticComponent
      }
      ,{
        path : 'aliments',
        component : PageAlimentComponent
      }
      ,{
        path : 'nouvelaliment',
        component : NouvelAlimentComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
