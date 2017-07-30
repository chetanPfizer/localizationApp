import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoaderProvider } from '../../providers/loader/loader'
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  inputArray:any = [];
  outputArray:any = {};
  progess:number = 0;
  outputLang:string;
  inputLang: string;
  subscription:Subscription;

  constructor(public navCtrl: NavController, public loaderProvider: LoaderProvider) {


      this.subscription = this.loaderProvider.getInput$.subscribe((data) => { 
        // console.log(data);
        if(localStorage.getItem("outputArray") != undefined){
          this.outputArray = JSON.parse(localStorage.getItem("outputArray"));
        }
        if(data == undefined){
          if(localStorage.getItem("inputArray") != undefined){
            this.inputArray = JSON.parse(localStorage.getItem("inputArray"));
          }
        }
        else{
          this.inputArray = data;
          this.inputArray = this.inputArray.map((d)=>{
            d["isDone"] = false;
            return d;
          });
          localStorage.setItem("inputArray",JSON.stringify(this.inputArray));
        }

      })
  }
  onValueChange(key, value){
    this.outputArray[key] = value;
    localStorage.setItem("outputArray",JSON.stringify(this.outputArray))
  }
  download(){
    let val =  JSON.parse(localStorage.getItem("outputArray"));
    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(val));
    let dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href",     dataStr     );
    dlAnchorElem.setAttribute("download", this.outputLang + ".json");
    dlAnchorElem.click();
  }
  markAsDone(i){
    this.inputArray[i].isDone = !this.inputArray[i].isDone;
    localStorage.setItem("inputArray",JSON.stringify(this.inputArray))
    this.calculateProgress();
  }
  calculateProgress(){
    let completed = this.inputArray.filter((ele)=>{
      return ele.isDone
    });
    this.progess = Math.round((100*completed.length/this.inputArray.length + 0.00001) * 100) / 100;
    console.log(100*completed.length/this.inputArray.length)
  }


  fileUploaded(event) {
    this.loaderProvider.fileUploaded(event);
  }
 
  


  languages = [
    {
      code:"en",
      text:"English"
    },
    {
      code:"es",
      text:"Spanish"
    },
    {
      code:"nl",
      text:"Dutch"
    },
    {
      code:"fr",
      text:"French"
    },
    {
      code:"de",
      text:"German"
    },
    {
      code:"it",
      text:"Italian"
    },
    {
      code:"pt",
      text:"Portuguese"
    },
    {
      code:"ja",
      text:"Japanese"
    },
    {
      code:"ko",
      text:"Korean"
    },
    {
      code:"zh-CN",
      text:"Simple Chinese"
    },
    {
      code:"zh-CN",
      text:"Traditional Chinese"
    },
  ]

}
