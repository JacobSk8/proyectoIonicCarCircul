import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public navCtrl : NavController) {}

  digitoUltimo: any;
  circulan1: any;


  

  calcular(){
    
    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth()+1;
    var yyyy = hoy.getFullYear();
    var num1 = this.digitoUltimo;



    dd=this.addZero(dd);
    mm=this.addZero(mm);

    var circulan11 = " lunes, miercoles y viernes";
    var circulan22 = " martes, jueves y sabado";
    var error = " debe ingresar un valor";

   if(num1 != ""){
    if(mm%2){
      if(num1%2){
        this.circulan1 = circulan11;
        
      }else{
        this.circulan1 = circulan22;

      }
  }else{
      if(num1%2){
        this.circulan1 = circulan22;

      }else{
        this.circulan1 = circulan11;

    }
  }
}else{
  this.circulan1 = error;
}
   
    


    let hoy2 = dd+'/'+mm+'/'+yyyy;
    console.log(hoy2);

  }


  addZero(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}


}

