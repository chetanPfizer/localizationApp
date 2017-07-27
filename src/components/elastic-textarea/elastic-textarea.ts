import {Component, ViewChild, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'elastic-textarea',
  inputs: ['placeholder', 'lineHeight','content'],
  template:
  `
  <ion-textarea #ionTxtArea
    placeholder='{{placeholder}}'
    [(ngModel)]="content"
    (ngModelChange)='onChange($event)'></ion-textarea>
  `,
  queries: {
    ionTxtArea: new ViewChild('ionTxtArea')
  }
})
export class ElasticTextarea {
  content: any;
  lineHeight: any;
  txtArea: any;
  ionTxtArea: any;
  @Output() onValueChange = new EventEmitter();
  constructor() {
    this.content = "";
    this.lineHeight = "22px";
  }

  ngAfterViewInit(){
    this.txtArea = this.ionTxtArea._elementRef.nativeElement.children[0];
    this.txtArea.style.height = this.lineHeight + "px";
  }

  onChange(newValue){
    this.txtArea.style.height = this.lineHeight + "px";
    this.txtArea.style.height =  this.txtArea.scrollHeight + "px";
    this.onValueChange.emit(newValue);
  }
}
