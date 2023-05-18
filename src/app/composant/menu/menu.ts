export interface Menu{
  id? : String;
  icone?: String;
  url? : String;
  titre? : String;
  sousMenu? : Array<Menu>;
}
