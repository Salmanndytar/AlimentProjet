/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CategorieDto } from '../models/categorie-dto';
@Injectable({
  providedIn: 'root',
})
class GlycemieAlimentV1categoriesService extends __BaseService {
  static readonly savPath = '/GlycemieAliment/V1/categories/create';
  static readonly deletePath = '/GlycemieAliment/V1/categories/delete/{idCategorie}';
  static readonly ctegorieByNomPath = '/GlycemieAliment/V1/categories/nomCategorie/{nomCategorie}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Mehode pour ajout et/ou modification d'une categoie d'aliment
   * @param body undefined
   * @return l'operation bien effectuee
   */
  savResponse(body?: CategorieDto): __Observable<__StrictHttpResponse<CategorieDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/GlycemieAliment/V1/categories/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategorieDto>;
      })
    );
  }
  /**
   * Mehode pour ajout et/ou modification d'une categoie d'aliment
   * @param body undefined
   * @return l'operation bien effectuee
   */
  sav(body?: CategorieDto): __Observable<CategorieDto> {
    return this.savResponse(body).pipe(
      __map(_r => _r.body as CategorieDto)
    );
  }

  /**
   * Mehode pour supprimer une categorie
   * @param idCategorie undefined
   * @return la categorie supprimee
   */
  deleteResponse(idCategorie: number): __Observable<__StrictHttpResponse<CategorieDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/GlycemieAliment/V1/categories/delete/${idCategorie}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategorieDto>;
      })
    );
  }
  /**
   * Mehode pour supprimer une categorie
   * @param idCategorie undefined
   * @return la categorie supprimee
   */
  delete(idCategorie: number): __Observable<CategorieDto> {
    return this.deleteResponse(idCategorie).pipe(
      __map(_r => _r.body as CategorieDto)
    );
  }

  /**
   * Mehode pour chercher une categorie via son nom
   * @param nomCategorie undefined
   * @return la categorie a ete trouve
   */
  ctegorieByNomResponse(nomCategorie: string): __Observable<__StrictHttpResponse<CategorieDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/GlycemieAliment/V1/categories/nomCategorie/${nomCategorie}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategorieDto>;
      })
    );
  }
  /**
   * Mehode pour chercher une categorie via son nom
   * @param nomCategorie undefined
   * @return la categorie a ete trouve
   */
  ctegorieByNom(nomCategorie: string): __Observable<CategorieDto> {
    return this.ctegorieByNomResponse(nomCategorie).pipe(
      __map(_r => _r.body as CategorieDto)
    );
  }
}

module GlycemieAlimentV1categoriesService {
}

export { GlycemieAlimentV1categoriesService }
