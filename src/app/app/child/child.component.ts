import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() inputFromParent = 0;
  @Input() minus = '';
  @Input() plus = '';
  @Input() rs = '' ;

  

  // constructor() { 
     // console.log(this.inputFromParent);
  //   console.log(this.minus);
  // }
  // ngOnInit() {
   // console.log(this.inputFromParent);
  // }
  
  count = this.inputFromParent;
  @Output() sendCount = new EventEmitter()
  minfun(){
   
    this.count--;
    this.sendCount.emit(this.count)
    console.log(this.count);
  }
  
  plusfun(){
    this.count++;
    this.sendCount.emit(this.count)
    console.log(this.count);
  }
  
  resetfun(){
    this.count=0;
    this.sendCount.emit (this.count)
    console.log(this.count);
  
  }
}
