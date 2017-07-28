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
  progess:number = 0;
  outputLang:string;
  inputLang: string;

  constructor(public navCtrl: NavController, public loaderProvider: LoaderProvider) {
    if(localStorage.getItem("outputArray") != undefined){
      this.outputArray = JSON.parse(localStorage.getItem("outputArray"));
    }
    
    loaderProvider.getInput().subscribe((data: any)=>{
      // console.log(data);
      this.inputArray = data;
      this.inputArray = this.inputArray.map((d)=>{
        d["isDone"] = false;
        return d;
      })
    });
  }
  onValueChange(key, value){
    this.outputArray[key] = value;
    console.log(this.outputArray);
    localStorage.setItem("outputArray",JSON.stringify(this.outputArray))
  }
  export(){
    this.download(this.loaderProvider.setOutput( this.outputArray));
    console.log(encodeURI(JSON.stringify(this.outputArray)));
  }
  download(val){
    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(val));
    let dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href",     dataStr     );
    dlAnchorElem.setAttribute("download", this.outputLang + ".json");
    dlAnchorElem.click();
  }
  markAsDone(i){
    this.inputArray[i].isDone = !this.inputArray[i].isDone;
    this.calculateProgress();
  }
  calculateProgress(){
    let completed = this.inputArray.filter((ele)=>{
      return ele.isDone
    });
    this.progess = Math.round((100*completed.length/this.inputArray.length + 0.00001) * 100) / 100;
    console.log(100*completed.length/this.inputArray.length)
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
