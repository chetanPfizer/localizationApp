import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoaderProvider } from '../../providers/loader/loader'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  inputArray:any = [];
  outputArray:any = {};

  constructor(public navCtrl: NavController, public loaderProvider: LoaderProvider) {
    if(localStorage.getItem("outputArray") != undefined){
      this.outputArray = JSON.parse(localStorage.getItem("outputArray"));
    }
    
    loaderProvider.getInput().subscribe((data: any)=>{
      // console.log(data);
      this.inputArray = data;
    });
  }
  onValueChange(key, value){
    this.outputArray[key] = value;
    console.log(this.outputArray);
    localStorage.setItem("outputArray",JSON.stringify(this.outputArray))
  }
  export(){
    this.loaderProvider.setOutput( this.outputArray);
  }



}
