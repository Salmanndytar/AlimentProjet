import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {label} from "../label/label";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public static kyword:string;
  testKy :string =  HeaderComponent.kyword;
//message sur voler
  val : boolean[] =  label.val;
  mousseout(i:number){
    label.mousseout(i);
  }
  moussenter(j:number){
    label.moussenter(j);
  }
  @Output()
//  onclick = new EventEmitter;
  MyKyup = new EventEmitter;
  searchFormGroup!: FormGroup;

  constructor(
    private  router: Router,
    private formBud : FormBuilder) { }

  ngOnInit(): void {
    this.searchFormGroup = this.formBud.group(
      {
       ky: this.formBud.control("")
      }
    );
    this.submit();
  }
  profil():void{
    this.router.navigate(['profil'])
  }

  submit() {
    this.MyKyup.emit();
   HeaderComponent.kyword = this.searchFormGroup.value.ky;
  }

}
