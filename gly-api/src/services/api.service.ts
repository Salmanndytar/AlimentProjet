/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AlimentDto } from '../models/aliment-dto';
import { CategorieDto } from '../models/categorie-dto';
import { RoleToUser } from '../models/role-to-user';
import { Roles } from '../models/roles';
import { UtulisateurDto } from '../models/utulisateur-dto';
import { AuthenticationResponse } from '../models/authentication-response';
import { AuthenticationRequest } from '../models/authentication-request';
import { SendMailDto } from '../models/send-mail-dto';
@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly finAlimentByCategoriePath = '/GlycemieAliment/V1/aliments/categorie/{categorieDto}';
  static readonly savPath = '/GlycemieAliment/V1/aliments/create';
  static readonly finByIdPath = '/GlycemieAliment/V1/aliments/{idAliment}';
  static readonly finAllPath = '/GlycemieAliment/V1/categories/all';
  static readonly ctegorieByIdPath = '/GlycemieAliment/V1/categories/{idCategorie}';
  static readonly savePhoto2Path = '/GlycemieAliment/V1/photos/{id}/{title}/{context}';
  static readonly roleToUserPath = '/GlycemieAliment/V1/roles/AddroleToUser';
  static readonly finAll_1Path = '/GlycemieAliment/V1/roles/all';
  static readonly finAll_2Path = '/GlycemieAliment/V1/utilisateurs/all';
  static readonly sav_1Path = '/GlycemieAliment/V1/utilisateurs/create';
  static readonly findUtilisateurByMailOrTelPath = '/GlycemieAliment/V1/utilisateurs/mailOrTel/{mail},{tel}';
  static readonly authenticationPath = 'GlycemieAliment/V1/aut/authenticate';
  static readonly codePath = 'GlycemieAliment/V1/code/{code}';
  static readonly senMailPath = 'GlycemieAliment/V1/sendMails';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Mehode pour chercher un aliment via son categorie(id)
   * @return Liste aliment de categorie fournie[::::::]/ou ou liste vide[  ]
   */
  finAlimentByCategorieResponse(): __Observable<__StrictHttpResponse<AlimentDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/GlycemieAliment/V1/aliments/categorie/${categorieDto}`,
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
   * Mehode pour chercher un aliment via son categorie(id)
   * @return Liste aliment de categorie fournie[::::::]/ou ou liste vide[  ]
   */
  finAlimentByCategorie(): __Observable<AlimentDto> {
    return this.finAlimentByCategorieResponse().pipe(
      __map(_r => _r.body as AlimentDto)
    );
  }

  /**
   * Mehode pour ajout et/ou modification d'un aliment
   * @return l'operation de l'aliment bien effectuee
   */
  savResponse(): __Observable<__StrictHttpResponse<AlimentDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/GlycemieAliment/V1/aliments/create`,
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
   * Mehode pour ajout et/ou modification d'un aliment
   * @return l'operation de l'aliment bien effectuee
   */
  sav(): __Observable<AlimentDto> {
    return this.savResponse().pipe(
      __map(_r => _r.body as AlimentDto)
    );
  }

  /**
   * Mehode pour chercher un aliment via son identifiant(ID)
   * @return l'aliment a ete trouve
   */
  finByIdResponse(): __Observable<__StrictHttpResponse<AlimentDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/GlycemieAliment/V1/aliments/${idAliment}`,
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
   * Mehode pour chercher un aliment via son identifiant(ID)
   * @return l'aliment a ete trouve
   */
  finById(): __Observable<AlimentDto> {
    return this.finByIdResponse().pipe(
      __map(_r => _r.body as AlimentDto)
    );
  }

  /**
   * Mehode pour lister les categories
   * @return Categorie liste ou liste [  ]
   */
  finAllResponse(): __Observable<__StrictHttpResponse<Array<CategorieDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/GlycemieAliment/V1/categories/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CategorieDto>>;
      })
    );
  }
  /**
   * Mehode pour lister les categories
   * @return Categorie liste ou liste [  ]
   */
  finAll(): __Observable<Array<CategorieDto>> {
    return this.finAllResponse().pipe(
      __map(_r => _r.body as Array<CategorieDto>)
    );
  }

  /**
   * Mehode pour chercher une categorie via son identifiant(ID)
   * @return la categorie a ete trouve
   */
  ctegorieByIdResponse(): __Observable<__StrictHttpResponse<CategorieDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/GlycemieAliment/V1/categories/${idCategorie}`,
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
   * Mehode pour chercher une categorie via son identifiant(ID)
   * @return la categorie a ete trouve
   */
  ctegorieById(): __Observable<CategorieDto> {
    return this.ctegorieByIdResponse().pipe(
      __map(_r => _r.body as CategorieDto)
    );
  }

  /**
   * Methode pour ajout d'une photo d'un objet
   *  Context designe nom de l'objet ex: user
   * @return l'operation bien effectuee
   */
  savePhoto2Response(): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/GlycemieAliment/V1/photos/${id}/${title}/${context}`,
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
   * Methode pour ajout d'une photo d'un objet
   *  Context designe nom de l'objet ex: user
   * @return l'operation bien effectuee
   */
  savePhoto2(): __Observable<{}> {
    return this.savePhoto2Response().pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * Mehode pour attribuer les roles aux utilisateurs
   * @return l'operation bien effectuee
   */
  roleToUserResponse(): __Observable<__StrictHttpResponse<RoleToUser>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/GlycemieAliment/V1/roles/AddroleToUser`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RoleToUser>;
      })
    );
  }
  /**
   * Mehode pour attribuer les roles aux utilisateurs
   * @return l'operation bien effectuee
   */
  roleToUser(): __Observable<RoleToUser> {
    return this.roleToUserResponse().pipe(
      __map(_r => _r.body as RoleToUser)
    );
  }

  /**
   * Mehode pour lister les roles
   * @return roles liste ou liste [  ]
   */
  finAll_1Response(): __Observable<__StrictHttpResponse<Array<Roles>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/GlycemieAliment/V1/roles/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Roles>>;
      })
    );
  }
  /**
   * Mehode pour lister les roles
   * @return roles liste ou liste [  ]
   */
  finAll_1(): __Observable<Array<Roles>> {
    return this.finAll_1Response().pipe(
      __map(_r => _r.body as Array<Roles>)
    );
  }

  /**
   * Mehode pour liste utlisateur
   * @return utilisateurs liste ou liste [  ]
   */
  finAll_2Response(): __Observable<__StrictHttpResponse<Array<UtulisateurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/GlycemieAliment/V1/utilisateurs/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UtulisateurDto>>;
      })
    );
  }
  /**
   * Mehode pour liste utlisateur
   * @return utilisateurs liste ou liste [  ]
   */
  finAll_2(): __Observable<Array<UtulisateurDto>> {
    return this.finAll_2Response().pipe(
      __map(_r => _r.body as Array<UtulisateurDto>)
    );
  }

  /**
   * Mehode pour ajout et/ou modification d'un utilisateur
   *  Pandent l'ajout, il n'est pas autoriser le role il y aun url pour l'ajout role
   * @return Utilisateur bien insere
   */
  sav_1Response(): __Observable<__StrictHttpResponse<UtulisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/GlycemieAliment/V1/utilisateurs/create`,
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
   * Mehode pour ajout et/ou modification d'un utilisateur
   *  Pandent l'ajout, il n'est pas autoriser le role il y aun url pour l'ajout role
   * @return Utilisateur bien insere
   */
  sav_1(): __Observable<UtulisateurDto> {
    return this.sav_1Response().pipe(
      __map(_r => _r.body as UtulisateurDto)
    );
  }

  /**
   * Mehode pour chercher un utilisateur via son e-mail et/ou telephone
   * @return l'utilisateur a ete trouve
   */
  findUtilisateurByMailOrTelResponse(): __Observable<__StrictHttpResponse<UtulisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/GlycemieAliment/V1/utilisateurs/mailOrTel/${mail},${tel}`,
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
   * Mehode pour chercher un utilisateur via son e-mail et/ou telephone
   * @return l'utilisateur a ete trouve
   */
  findUtilisateurByMailOrTel(): __Observable<UtulisateurDto> {
    return this.findUtilisateurByMailOrTelResponse().pipe(
      __map(_r => _r.body as UtulisateurDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  authenticationResponse(body?: AuthenticationRequest): __Observable<__StrictHttpResponse<AuthenticationResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `GlycemieAliment/V1/aut/authenticate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthenticationResponse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  authentication(body?: AuthenticationRequest): __Observable<AuthenticationResponse> {
    return this.authenticationResponse(body).pipe(
      __map(_r => _r.body as AuthenticationResponse)
    );
  }

  /**
   * @param code undefined
   * @return successful operation
   */
  codeResponse(code: string): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `GlycemieAliment/V1/code/${code}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param code undefined
   * @return successful operation
   */
  code(code: string): __Observable<string> {
    return this.codeResponse(code).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param body undefined
   */
  senMailResponse(body?: SendMailDto): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `GlycemieAliment/V1/sendMails`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param body undefined
   */
  senMail(body?: SendMailDto): __Observable<null> {
    return this.senMailResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ApiService {
}

export { ApiService }
