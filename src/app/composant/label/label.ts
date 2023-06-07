
 export class label {
  public static val : boolean[]=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
  public static mousseout(i:number) :void {
    label.val.splice(i, i, false);
    label.val.splice(i+1, i+1, false);

}
public static moussenter(j:number):void {
  label.val.splice(j,j,true)
}
}
