import { Component, OnInit, EventEmitter } from '@angular/core';
import { MatSliderChange, MatSlider } from '@angular/material/slider';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Superhero } from '../models/superhero';
import * as moment from 'moment';

@Component({
  selector: 'app-create-superhero-reactive-form',
  templateUrl: './create-superhero-reactive-form.component.html',
  styleUrls: ['./create-superhero-reactive-form.component.css']
})
export class CreateSuperheroReactiveFormComponent implements OnInit {


  superheroFormGroup: FormGroup;

  minRating:number = 1;
  maxRating:number = 10;
  rating: number=8;

  dobMinDate = new Date();
  dobMaxDate = new Date();

  onSliderChange(event: MatSliderChange){
    console.log(event.value );
  }

  onToggleChange(event: MatSlideToggleChange){
    console.log(event.checked );
  }

  onToggleCheckboxChange(event: MatCheckboxChange){
    console.log(event.checked );
  }

  filterWeekends(date: Date){
    // if(date.day() !== 0 && date.day() !== 6){
      return true;
    // }
    // return false;
  }


  // name: FormControl = new FormControl("Chhotta Bheem by default");
  // email: FormControl = this.fb.control("");
  // details: FormControl = this.fb.control("");
  // powers: FormControl = this.fb.control("");
  // country: FormControl = this.fb.control("");
  // favFood: FormControl = this.fb.control("");
  dob: Date = new Date("05/21/2019");
  
  cities = [ {
    name: "New York",
    selectedByDefault: true 
  },{
    name: "Boston",
    selectedByDefault: false
  },{
    name: "Hyderabad",
    selectedByDefault: false 
  }, {
    name: "Bengaluru",
    selectedByDefault: true 
  }];

  favs = [];


  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    let j = this.cities.map( i => new FormControl(i.selectedByDefault));

    this.superheroFormGroup = new FormGroup( {
      name: new FormControl('', Validators.required),
      email:new FormControl('', [Validators.required, Validators.email]),
      details: new FormControl('', [Validators.minLength(5),Validators.maxLength(100)]),
      powers: new FormControl(''),
      country: new FormControl(''),
      dob: new FormControl(new Date('05/20/2019')),
      rating: new FormControl(2),
      jurisdiction: new FormArray(j)
    });


    // this.superheroFormGroup = this.fb.group({
    //   name:['', Validators.required],
    //   email:['', Validators.required, Validators.email],
    //   details: ['', Validators.minLength(5), Validators.maxLength(100)],
    //   powers: '',
    //   country: '',
    //   dob: new Date(),
    //   rating: 8
    //   // jurisdiction: this.fb.array(["New York, Boston, Hyderabad, Bengaluru"])

    // });

    // this.superheroFormGroup
    // .valueChanges
    // .subscribe(item =>
    //   console.log("Stream as form changes, ", item as Superhero));

    this.superheroFormGroup
    .valueChanges
    .subscribe(item => {
      item.jurisdiction.map( (value, it)=> console.log(this.cities[it].name, value));
    });


    // setTimeout( () => this.name.setValue("Value set on timeout"), 1000);
  }

  get name(){
    return this.superheroFormGroup
      .get("name");
  }

  get email(){
    return this.superheroFormGroup
      .get('email');
  }

  get favFood(){
    return this.superheroFormGroup.get('favFood') as FormArray
  }

  submitHanlder(){
    let superhero = this.superheroFormGroup.value as Superhero;
    console.log("Superhero model object ", moment(this.superheroFormGroup.value.dob).toDate());
  }

  changeHandler(){
    // console.log("Log the snapshot at a point in time, ", this.name.value);
  }

  removeHandler(){

  }

}
