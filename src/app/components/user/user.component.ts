import { Component, OnInit } from '@angular/core'
//import { templateVisitAll } from '@angular/compiler';
import { User } from '../../models/User'


@Component({
    selector: 'app-user',
    templateUrl:'./user.component.html',
    styleUrls:['./user.component.css']
    //template: '<h2>John Doe </h2>'
})

export class UserComponent implements OnInit {
    //Properties
   /*firstName = 'John';
lastName = 'Doe';
 age = 30;
 exemple1:any ;
exemple2:boolean;
numberArray: number[];
mixedArray:any[];
unusable:void;
u: undefined;
n:null;
s:void;
*/
user: User ;

  
    //Methods
  constructor() {
     // console.log('Hello User ...');
          //this.sayHello();
        
         }

ngOnInit() {
  
}
}
         /* console.log(this.age);
          this.exemple1= true;
          this.exemple2= false;
          this.numberArray = [1,2,3];
          this.mixedArray=[1,'helllo'];
          this.unusable=undefined; 
          this.u=undefined;
          this.n=null;
          this.s=console.log(this.addNum(2,3));

  }  /*sayHello(){
      //console.log('Hello ' + '  ' + this.firstName);
      console.log(`Hello  ${this.firstName}`);
  }
    hasbirthday(){
        this.age +=1;
        
    }
   addNum(num1:number , num2:number): number{
      return  num1 + num2 ;
   }
    
*/
  /*interface User {
      firstName : string ,
      lastName:string,
      age:number,

      address : {
         street: string ,
         city: string,
         state: string
         
     
      };
*/
   

