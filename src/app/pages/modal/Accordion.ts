export class Accordion{
public static isView : boolean[] = [false,false,false,false,false];
  public static show : String='';
  public static  position : String ='';
   static i: number = 0;
  public static  clickImg(i:number) {
    Accordion.isView.splice(i,i,true)
    Accordion.isView.splice(i+1,i+1,false)
    Accordion.show ='show'
    Accordion.position='position-opsolute';
    this.i= i;
  }
  public  static clos(): void{
    Accordion.show='';
    Accordion.position ='';
    Accordion.isView.splice(this.i,this.i,false)
    Accordion.isView.splice(this.i+1,this.i+1,false)
  }

}
