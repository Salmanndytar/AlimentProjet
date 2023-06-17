/* tslint:disable */
import { Categorie } from './categorie';
export interface AlimentDto {
  id?: number;
  codeAlim?: string;
  aliment?: string;
  indexGly?: string;
  chargeGly?: string;
  contentGly?: string;
  etatAliment?: 'VALIDE' | 'NO_VALIDE';
  photo?: string;
  categorie?: Categorie;
  creationDate?: number;
  lastModifiedDate?: number;
}
