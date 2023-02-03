import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Counter Application';
  count :number= 0;
  minus :string = "-";
  plus :string = "+";
  rs : string = "R";

  getCount(event:any){
    this.count = event
  }
// minfun(){
  
//   this.count--;
// }

// plusfun(){
//   this.count++;
// }

// resetfun(){

//   this.count=0;

// }

getColor(){

  // return this.count == 0 ? 'black': 'green';

  if(this.count == 0){return 'black';}
  else if(this.count>0){return 'green';}
  else{return 'red';}

}

}
