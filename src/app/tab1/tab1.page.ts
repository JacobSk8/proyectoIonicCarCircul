import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  digitoUltimo: any;
  circulan1: string = "";
  
  calcular(){
    
    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth()+1;
    var yyyy = hoy.getFullYear();
    var num1 = this.digitoUltimo;


    var circulan11 = " lunes, miercoles y viernes";
    var circulan22 = " martes, jueves y sabado";
    var error = " debe ingresar un valor";

   if(num1 != "" && num1 != null){
    if(mm%2){
       (num1%2) ? this.circulan1 = circulan11 :  this.circulan1 = circulan22;
  }else{
    (num1%2) ?  this.circulan1 = circulan22 : this.circulan1 = circulan11 ;
  }
}else{
  this.circulan1 = error;
}  

  }

}

