/* tslint:disable */
import { Roles } from './roles';
export interface UtulisateurDto {
  id?: number;
  nom?: string;
  prenom?: string;
  photo?: string;
  mail?: string;
  tel?: string;
  roles?: Array<Roles>;
}
