/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { GlycemieAlimentV1alimentsService } from './services/glycemie-aliment-v1aliments.service';
import { ApiService } from './services/api.service';
import { GlycemieAlimentV1categoriesService } from './services/glycemie-aliment-v1categories.service';
import { GlycemieAlimentV1rolesService } from './services/glycemie-aliment-v1roles.service';
import { GlycemieAlimentV1utilisateursService } from './services/glycemie-aliment-v1utilisateurs.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    GlycemieAlimentV1alimentsService,
    ApiService,
    GlycemieAlimentV1categoriesService,
    GlycemieAlimentV1rolesService,
    GlycemieAlimentV1utilisateursService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
