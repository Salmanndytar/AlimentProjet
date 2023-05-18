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
    NouvelAlimentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
