import {ListAlim} from "./listAlim";

export interface ListRepa {
  id?:String,
  nom ?:String,
  type?:String,
  detailRepas? : Array<ListAlim>,
}
