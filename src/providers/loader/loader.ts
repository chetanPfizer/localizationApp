import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
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
  getInput(){


    return  this.http.get('../../assets/data/input.json')
            .map( (res) =>{
              let data = res.json();
                //console.log(data);
                // this.traverse(data,this.process);
                this.printLang(data,"");
                
                return this.langArray;
            })

  }

  setOutput(array){
    this.structuring(array)
  }

  private process(key,value) {
      console.log(key + " : "+value);
  }
  private traverse(o,func) {
      for (var i in o) {
          func.apply(this,[i,o[i]]);  
          if (o[i] !== null && typeof(o[i])=="object") {
              //going one step down in the object tree!!
              this.traverse(o[i],func);
          }
      }
  }

  private printLang(obj,temp){
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

  private structuring(uniJson){
    // console.log(uniJson);
    let mulJson = {};
    let keysArray = []
    for(let key in uniJson){      
      let keys = key.split(".");
      keysArray.push(keys);  
      // console.log(this.getObject(keys,uniJson[key]));
    }
    console.log(this.getObjectFinal(keysArray,"aa"))

  }
  
  getObject(keys, value){
    let returnValue = {};
    if(keys.length == 1){      
      returnValue[keys[0]] = value;
      return returnValue;
    }else{
      returnValue[keys[0]] = this.getObject(keys.slice(1), value);
      return returnValue;      
    }
  }

  getObjectFinal(keysArray, value){
// Getting unique keys at first index of provided keysArray
    if(keysArray[0] == "" || keysArray[0] == null || keysArray[0] == undefined){
      console.log("eddddddddd");
      let returnValue = {}
      returnValue[keysArray[0]] = value
      return returnValue;
    }
    let uniqueKey = [];
    for(let i in keysArray){
      if(uniqueKey.indexOf(keysArray[i][0])<0){
        uniqueKey.push(keysArray[i][0])
      }
    } 
    // console.log(uniqueKey);
    let returnValue = {}
    for(let i in uniqueKey){
      let newKeysArray = keysArray.filter((e)=>{ return e[0] === uniqueKey[i] }); 
      console.log(newKeysArray);
      let keyNow = newKeysArray[0]
      for(let j in newKeysArray){
          newKeysArray[j] = newKeysArray[j].slice(1);
      }
      
      returnValue[keyNow] = this.getObjectFinal(newKeysArray, "a");
      
    }
    return returnValue;
  }

}
