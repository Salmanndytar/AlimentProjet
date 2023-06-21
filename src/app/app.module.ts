import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatisticComponent } from './pages/page-statistic/page-statistic.component';
import { MenuComponent } from './composant/menu/menu.component';
import { HeaderComponent } from './composant/header/header.component';
import { FooterComponent } from './composant/footer/footer.component';
import { PageAlimentComponent } from './pages/page-aliment/page-aliment.component';
import { DetailAlimentComponent } from './composant/detail-aliment/detail-aliment.component';
import { PaginationComponent } from './composant/pagination/pagination.component';
import { BoutonActionComponent } from './composant/bouton-action/bouton-action.component';
import { NouvelAlimentComponent } from './pages/aliment/nouvel-aliment/nouvel-aliment.component';
import { JournalComponent } from './pages/journal/journal.component';
import { DetailJournalComponent } from './composant/detail-journal/detail-journal.component';
import { UsersComponent } from './pages/user/users/users.component';
import { DetailUsersComponent } from './pages/user/detail-users/detail-users.component';
import { NouveauRepasComponent } from './pages/page-repas/nouveau-repas/nouveau-repas.component';
import { DetailRepasComponent } from './composant/detail-repas/detail-repas.component';
import { QtAlimentComponent } from './composant/qt-aliment/qt-aliment.component';
import { ProfilComponent } from './composant/profil/profil.component';
import { PasswordComponent } from './pages/password/password.component';
import { ListRepasComponent } from './pages/page-repas/list-repas/list-repas.component';
import { RepasComponent } from './pages/page-repas/repas/repas.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CosommerComponent } from './composant/cosommer/cosommer.component';
import { LabelComponent } from './composant/label/label.component';
import { PageTacheComponent } from './pages/page-tache/page-tache.component';
import { GlycemieComponent } from './composant/detail-taches/glycemie/glycemie.component';
import { PoidsComponent } from './composant/detail-taches/poids/poids.component';
import { SportComponent } from './composant/detail-taches/sport/sport.component';
import { MedicamentComponent } from './composant/detail-taches/medicament/medicament.component';
import { HemoglobineComponent } from './composant/detail-taches/hemoglobine/hemoglobine.component';
import { TensionComponent } from './composant/detail-taches/tension/tension.component';
import { MenuAdminComponent } from './composant/detail-menu/menu-admin/menu-admin.component';
import { MenuMedecinComponent } from './composant/detail-menu/menu-medecin/menu-medecin.component';
import { MenuDiabetiqueComponent } from './composant/detail-menu/menu-diabetique/menu-diabetique.component';
import { MenuAutreComponent } from './composant/detail-menu/menu-autre/menu-autre.component';
import { PagePatientComponent } from './pages/page-patient/page-patient.component';
import { DetailPatientComponent } from './composant/detail-patient/detail-patient.component';
import { SuiviComponent } from './composant/suivi/suivi.component';
import { NouveauPatientComponent } from './pages/nouveau-patient/nouveau-patient.component';
import { MonSuiviComponent } from './pages/mon-suivi/mon-suivi.component';
import {HttpClientModule} from "@angular/common/http";
import { LoadingComponent } from './composant/loading/loading.component';
import { CodeValidationComponent } from './composant/code-validation/code-validation.component';
import { NewPwdComponent } from './pages/password/new-pwd/new-pwd.component';


@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageStatisticComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    PageAlimentComponent,
    DetailAlimentComponent,
    PaginationComponent,
    BoutonActionComponent,
    NouvelAlimentComponent,
    JournalComponent,
    DetailJournalComponent,
    UsersComponent,
    DetailUsersComponent,
    NouveauRepasComponent,
    DetailRepasComponent,
    QtAlimentComponent,
    ProfilComponent,
    PasswordComponent,
    ListRepasComponent,
    RepasComponent,
    CosommerComponent,
    LabelComponent,
    PageTacheComponent,
    GlycemieComponent,
    PoidsComponent,
    SportComponent,
    MedicamentComponent,
    HemoglobineComponent,
    TensionComponent,
    MenuAdminComponent,
    MenuMedecinComponent,
    MenuDiabetiqueComponent,
    MenuAutreComponent,
    PagePatientComponent,
    DetailPatientComponent,
    SuiviComponent,
    NouveauPatientComponent,
    MonSuiviComponent,
    LoadingComponent,
    CodeValidationComponent,
    NewPwdComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
