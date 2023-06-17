/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UtulisateurDto } from '../models/utulisateur-dto';
@Injectable({
  providedIn: 'root',
})
class GlycemieAlimentV1utilisateursService extends __BaseService {
  static readonly deletePath = '/GlycemieAliment/V1/utilisateurs/delete/{idutilisateur}';
  static readonly GeneratCodeValidationPath = '/GlycemieAliment/V1/utilisateurs/teste/{mail}';
  static readonly finByIdPath = '/GlycemieAliment/V1/utilisateurs/{idutilisateur}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Mehode pour supprimer un utilisateur via son (id)
   * @param idutilisateur undefined
   * @return l'utlisateur supprime
   */
  deleteResponse(idutilisateur: number): __Observable<__StrictHttpResponse<UtulisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/GlycemieAliment/V1/utilisateurs/delete/${idutilisateur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtulisateurDto>;
      })
    );
  }
  /**
   * Mehode pour supprimer un utilisateur via son (id)
   * @param idutilisateur undefined
   * @return l'utlisateur supprime
   */
  delete(idutilisateur: number): __Observable<UtulisateurDto> {
    return this.deleteResponse(idutilisateur).pipe(
      __map(_r => _r.body as UtulisateurDto)
    );
  }

  /**
   * *****************
   * @param mail undefined
   * @return l'utilisateur a ete trouve
   */
  GeneratCodeValidationResponse(mail: string): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/GlycemieAliment/V1/utilisateurs/teste/${mail}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * *****************
   * @param mail undefined
   * @return l'utilisateur a ete trouve
   */
  GeneratCodeValidation(mail: string): __Observable<{}> {
    return this.GeneratCodeValidationResponse(mail).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * Mehode pour chercher un utilisateur via son identifiant(ID)
   * @param idutilisateur undefined
   * @return l'utilisateur a ete trouve
   */
  finByIdResponse(idutilisateur: number): __Observable<__StrictHttpResponse<UtulisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/GlycemieAliment/V1/utilisateurs/${idutilisateur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtulisateurDto>;
      })
    );
  }
  /**
   * Mehode pour chercher un utilisateur via son identifiant(ID)
   * @param idutilisateur undefined
   * @return l'utilisateur a ete trouve
   */
  finById(idutilisateur: number): __Observable<UtulisateurDto> {
    return this.finByIdResponse(idutilisateur).pipe(
      __map(_r => _r.body as UtulisateurDto)
    );
  }
}

module GlycemieAlimentV1utilisateursService {
}

export { GlycemieAlimentV1utilisateursService }
