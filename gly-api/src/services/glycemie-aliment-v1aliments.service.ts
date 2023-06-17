/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AlimentDto } from '../models/aliment-dto';
@Injectable({
  providedIn: 'root',
})
class GlycemieAlimentV1alimentsService extends __BaseService {
  static readonly finAllPath = '/GlycemieAliment/V1/aliments/all';
  static readonly findAllByEtatAlimentPath = '/GlycemieAliment/V1/aliments/allByEtatAliment/{etatAliment}';
  static readonly deletePath = '/GlycemieAliment/V1/aliments/delete/{idAliment}';
  static readonly updateEtatAlimentPath = '/GlycemieAliment/V1/aliments/etats/{idAliment},{etatAliment}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Mehode pour liste aliments
   * @return aliment liste ou liste [  ]
   */
  finAllResponse(): __Observable<__StrictHttpResponse<Array<AlimentDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/GlycemieAliment/V1/aliments/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AlimentDto>>;
      })
    );
  }
  /**
   * Mehode pour liste aliments
   * @return aliment liste ou liste [  ]
   */
  finAll(): __Observable<Array<AlimentDto>> {
    return this.finAllResponse().pipe(
      __map(_r => _r.body as Array<AlimentDto>)
    );
  }

  /**
   * Mehode pour liste aliments par etat:[valide ou no_valide]
   * @param etatAliment undefined
   * @return aliment liste ou liste [  ]
   */
  findAllByEtatAlimentResponse(etatAliment: string): __Observable<__StrictHttpResponse<Array<AlimentDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/GlycemieAliment/V1/aliments/allByEtatAliment/${etatAliment}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AlimentDto>>;
      })
    );
  }
  /**
   * Mehode pour liste aliments par etat:[valide ou no_valide]
   * @param etatAliment undefined
   * @return aliment liste ou liste [  ]
   */
  findAllByEtatAliment(etatAliment: string): __Observable<Array<AlimentDto>> {
    return this.findAllByEtatAlimentResponse(etatAliment).pipe(
      __map(_r => _r.body as Array<AlimentDto>)
    );
  }

  /**
   * Mehode pour supprimer un aliment
   * @param idAliment undefined
   * @return l'aliment supprime
   */
  deleteResponse(idAliment: number): __Observable<__StrictHttpResponse<AlimentDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/GlycemieAliment/V1/aliments/delete/${idAliment}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AlimentDto>;
      })
    );
  }
  /**
   * Mehode pour supprimer un aliment
   * @param idAliment undefined
   * @return l'aliment supprime
   */
  delete(idAliment: number): __Observable<AlimentDto> {
    return this.deleteResponse(idAliment).pipe(
      __map(_r => _r.body as AlimentDto)
    );
  }

  /**
   * Mehode pour modifier etat d'un aliment
   *  Param:[idAlliment,valide ou no_valide]
   * @param params The `GlycemieAlimentV1alimentsService.UpdateEtatAlimentParams` containing the following parameters:
   *
   * - `idAliment`:
   *
   * - `etatAliment`:
   *
   * @return Etat modifié
   */
  updateEtatAlimentResponse(params: GlycemieAlimentV1alimentsService.UpdateEtatAlimentParams): __Observable<__StrictHttpResponse<AlimentDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/GlycemieAliment/V1/aliments/etats/${params.idAliment},${params.etatAliment}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AlimentDto>;
      })
    );
  }
  /**
   * Mehode pour modifier etat d'un aliment
   *  Param:[idAlliment,valide ou no_valide]
   * @param params The `GlycemieAlimentV1alimentsService.UpdateEtatAlimentParams` containing the following parameters:
   *
   * - `idAliment`:
   *
   * - `etatAliment`:
   *
   * @return Etat modifié
   */
  updateEtatAliment(params: GlycemieAlimentV1alimentsService.UpdateEtatAlimentParams): __Observable<AlimentDto> {
    return this.updateEtatAlimentResponse(params).pipe(
      __map(_r => _r.body as AlimentDto)
    );
  }
}

module GlycemieAlimentV1alimentsService {

  /**
   * Parameters for updateEtatAliment
   */
  export interface UpdateEtatAlimentParams {
    idAliment: number;
    etatAliment: string;
  }
}

export { GlycemieAlimentV1alimentsService }
