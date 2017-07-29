import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// key AIzaSyCvYNYCL7booWW22Ymxd89el2W4qaIKnOE


/*
  Generated class for the LoaderProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoaderProvider {
  private  tempName = "";
  private langArray = [];

  constructor(public http: Http) {    
  }

  fileUploaded(event) {
      var files = event.srcElement.files;
      console.log(files);
      var reader = new FileReader();
      reader.onload = (event:any)=>{
          // console.log(event.target.result);
          var obj = JSON.parse(event.target.result);
          // console.log(obj);
          this.langArray = [];
          let tempObject = {};
          localStorage.setItem("outputArray",JSON.stringify(tempObject));
          this.printLang(obj,"");
          this.changeInput(this.langArray);
      };
      reader.readAsText(event.target.files[0]);
  }

  // Observable getInput source
  private _inputSource = new BehaviorSubject<any>(undefined);
  // Observable getInput stream
  getInput$ = this._inputSource.asObservable();
  // service command
  changeInput(array) {
    this._inputSource.next(array);
  }
  
 
  setOutput(array):any{
    return this.structuring(array);
  }

  private printLang(obj,temp){
    console.log("printLang");
      if(this.tempName != "" && this.tempName != undefined){
          this.tempName = this.tempName + "." + temp;
      }
      else{
          this.tempName = temp;
      }

      for(let i in Object.getOwnPropertyNames(obj)){
          if(typeof obj[Object.getOwnPropertyNames(obj)[i]] == "string"){
              if(this.tempName != "" && this.tempName != undefined){
                //console.log(this.tempName +"."+ Object.getOwnPropertyNames(obj)[i]+": "+obj[Object.getOwnPropertyNames(obj)[i]]);
                this.langArray.push({
                  key:this.tempName +"."+ Object.getOwnPropertyNames(obj)[i],
                  value:obj[Object.getOwnPropertyNames(obj)[i]]
                });
              }
              else{
                //console.log(Object.getOwnPropertyNames(obj)[i]+":  "+obj[Object.getOwnPropertyNames(obj)[i]]);
                this.langArray.push({
                  key:Object.getOwnPropertyNames(obj)[i],
                  value:obj[Object.getOwnPropertyNames(obj)[i]]
                });
              }
          }
          else{
          this.printLang(obj[Object.getOwnPropertyNames(obj)[i]],  Object.getOwnPropertyNames(obj)[i]);
          }
      }
      this.tempName = "";
  }
  private _uniJson
  private structuring(uniJson):any {
    // console.log(uniJson);
    this._uniJson = uniJson
    let mulJson = {};
    let keysArray = []
    for(let key in uniJson){      
      let keys = key.split(".");
      keysArray.push(keys);  
    }
    return this.getObjectFinal(keysArray,"")

  }
  

  getObjectFinal(keysArray, value){
    // Getting unique keys at first index of provided keysArray
    if(keysArray[0] == "" ){
      //Recursion termination case
      return this._uniJson[value];
    }

    //Getting uniqueKey
    let uniqueKey = [];
    for(let i in keysArray){
      if(uniqueKey.indexOf(keysArray[i][0])<0){
        uniqueKey.push(keysArray[i][0])
      }
    } 
    let returnValue = {}
    for(let i in uniqueKey){
      let newKeysArray = keysArray.filter((e)=>{ return e[0] === uniqueKey[i] }); 
      // console.log(newKeysArray);
      let keyNow = newKeysArray[0]
      for(let j in newKeysArray){
          newKeysArray[j] = newKeysArray[j].slice(1);
      }   
      // console.log(keyNow[0]);   
      returnValue[keyNow[0]] = this.getObjectFinal(newKeysArray, value + ((value=="")?"":".") + keyNow[0]);
      
    }
    return returnValue;
  }

}
