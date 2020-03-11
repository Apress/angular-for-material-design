import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isItalic = false;
  isBold = false;
  isStrikeThrough = false;
  
  superheroes =[
    "Spiderman",
    "Chhota Bheem",
    "Superman",
    "Batman"
  ];

  get titleStyle(){
    return {
      'text-decoration': this.isStrikeThrough ? 'line-through' : 'none',
      'font-weight': this.isBold ? 'bold': 'normal',
      'font-style': this.isItalic ? 'italic': 'normal',
      'font-size': '24px'
    };
  }


  constructor() { 
    let promiseRef: Promise<any> = this.promiseSample(false);
    promiseRef.then( 
        (result) => { 
          console.log(result);
          // throw new Error("error in success handler");
        },
        (error) => {
          console.log("error handler", error)
          // throw new Error("error in failure handler");
        })
        .catch((error) => console.log("catch", error));

    let observableRef: Observable<string> = this.observableSample(true);
    observableRef.subscribe( 
        (result) => console.log(result),
        (error) => console.log(error),
        () => console.log("complete")
      );
  }

  ngOnChanges(){  }

  promiseSample(input){
    return new Promise( (resolve, reject) => {
      if(input){
        resolve("job well done");
      }else{
        //throw new Error("exception thrown")
        reject("job failed");
      }
    })
  }

  observableSample(input): Observable<string>{    
    return new Observable((observer) => {
      let values = ["value1", "value2", "value3", "value4"];
      if(input){
        values.map( value => observer.next(value));        
      }else{
        observer.error("error");
      }

      observer.complete();
    });
  }

  ngOnInit() {  }

}
