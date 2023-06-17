import { RoleDto }  from './RoleDto'
export interface UserDto {
  id?: number;
  nom?: string;
  prenom?: string;
  photo?: string;
  mail?: string;
  tel?: string;
  motDePasse?: string;
  poids?: number;
  taille?: number;
  sexe?: string;
  etat?: boolean;
  code?: string;
  roles?: Array<RoleDto>;
}
