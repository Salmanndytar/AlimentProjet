import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageInscriptionComponent} from "./pages/page-inscription/page-inscription.component";
import {PageDashboardComponent} from "./pages/page-dashboard/page-dashboard.component";
import {PageStatisticComponent} from "./pages/page-statistic/page-statistic.component";
import {PageAlimentComponent} from "./pages/page-aliment/page-aliment.component";
import {NouvelAlimentComponent} from "./pages/aliment/nouvel-aliment/nouvel-aliment.component";
import {JournalComponent} from "./pages/journal/journal.component";
import {UsersComponent} from "./pages/user/users/users.component";
import {NouveauRepasComponent} from "./pages/page-repas/nouveau-repas/nouveau-repas.component";
import {ProfilComponent} from "./composant/profil/profil.component";
import {PasswordComponent} from "./pages/password/password.component";
import {RepasComponent} from "./pages/page-repas/repas/repas.component";
import {CosommerComponent} from "./composant/cosommer/cosommer.component";
import {PageTacheComponent} from "./pages/page-tache/page-tache.component";
import {PagePatientComponent} from "./pages/page-patient/page-patient.component";
import {NouveauPatientComponent} from "./pages/nouveau-patient/nouveau-patient.component";
import {MonSuiviComponent} from "./pages/mon-suivi/mon-suivi.component";
import {AppGuardService} from "./services/guard/app-guard.service";
import {CodeValidationComponent} from "./composant/code-validation/code-validation.component";
import {NewPwdComponent} from "./pages/password/new-pwd/new-pwd.component";


const routes: Routes = [
  {
    path : 'login',
    component : PageLoginComponent  ,
    data:{
      role: 'val1'

    }
  },
  {
    path : 'inscription',
    component : PageInscriptionComponent
  },
  {
    path : 'codeValidation',
    component : CodeValidationComponent
  },
  {
    path : 'password',
    component : PasswordComponent
  },
  {
    path : 'newPwd',
    component : NewPwdComponent
  },
  {
    path : '',
    component : PageDashboardComponent,
    canActivate : [AppGuardService],
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

      ,{
        path : 'journal',
        component : JournalComponent
      },{
        path : 'mon-suivi',
        component : MonSuiviComponent
      },
      {
        path : 'users',
        component : UsersComponent
      },
      {
        path : 'nouveauRepas',
        component : NouveauRepasComponent
      },
      {
        path : 'repas',
        component : RepasComponent
      },
      {
        path : 'consommer',
        component : CosommerComponent
      },
      {
        path : 'taches',
        component : PageTacheComponent
      },
      {
        path : 'profil',
        component : ProfilComponent,
        // injecter de donnee dans router puis recuper dans son composant ex: profil
         data:{
            var1: 'val1',
           var2: 'val2'
          }
      },
      {
        path : 'patient',
        component : PagePatientComponent
      },
      {
        path : 'nouvau-patient',
        component : NouveauPatientComponent
      }


    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
