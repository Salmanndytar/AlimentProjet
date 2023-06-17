/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Roles } from '../models/roles';
@Injectable({
  providedIn: 'root',
})
class GlycemieAlimentV1rolesService extends __BaseService {
  static readonly saveRolePath = '/GlycemieAliment/V1/roles/create';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Mehode pour ajout et/ou modification d'un role
   * @param body undefined
   * @return l'operation bien effectuee
   */
  saveRoleResponse(body?: Roles): __Observable<__StrictHttpResponse<Roles>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/GlycemieAliment/V1/roles/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Roles>;
      })
    );
  }
  /**
   * Mehode pour ajout et/ou modification d'un role
   * @param body undefined
   * @return l'operation bien effectuee
   */
  saveRole(body?: Roles): __Observable<Roles> {
    return this.saveRoleResponse(body).pipe(
      __map(_r => _r.body as Roles)
    );
  }
}

module GlycemieAlimentV1rolesService {
}

export { GlycemieAlimentV1rolesService }
