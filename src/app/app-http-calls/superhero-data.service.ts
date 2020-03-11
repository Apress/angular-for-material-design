import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Superhero, Superhero2 } from '../superheroes-material-design/models/superhero';
import { Observable, Observer, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const URL_PREFIX = "http://localhost:3000";

@Injectable({
  providedIn: 'root',
})
export class SuperheroDataService {

  errorHandler = {
    log: (message, error) => console.log(message, error),
    alertFriendlyInfo: (message, observer: Observer<any>) => observer.error(message)
  };

  constructor(private httpClient: HttpClient) { }

  getHeroes():Observable<Array<Superhero>>{
      return this.httpClient.get<Array<Superhero>>(`${URL_PREFIX}/heroes`)
      .pipe(
        catchError( (error: HttpErrorResponse) => {
          this.errorHandler.log("Error while getting heroes", error);
          return throwError("Error while getting heroes");
        }));
  }

  // getHeroes(): Promise<Array<Superhero>>{
  //   return new Promise<Array<Superhero>>( (resolve /*, reject */)=> {
  //     let results: Array<Superhero> = [];
  //     this.httpClient.get<Array<Superhero>>(`${URL_PREFIX}/heroes`)
  //       .subscribe(
  //         (data: Array<Superhero>) => {
  //           data.map( i => {
  //             // perform additional processing and transformation of data obtained from the service.
  //             results.push(i)

  //           });
  //           resolve(results);
  //         },
  //         () => ({/** Error handling code goes here */}),  
  //         () => ({/** Observable complete */})  
  //       );
  //   });
  // }

  // getHeroes():Observable<Array<Superhero>>{
  //   return Observable.create((observer) => {
  //     let results: Array<Superhero> = [];
  //     this.httpClient.get<Array<Superhero>>(`${URL_PREFIX}/heroes`)
  //       .subscribe(
  //         (data: Array<Superhero>) => {
  //           data.map( i => {
  //             // perform additional processing and transformation of data obtained from the service.
  //             results.push(i)
  //           });

  //           observer.next(results);
  //           observer.complete();
            
  //         },
  //         (error) => { 
  //           this.errorHandler.log("Error while getting heroes", error);
  //           this.errorHandler.alertFriendlyInfo("Error while getting heroes", observer)
  //         },  
  //         () => ({/** Observable complete */})  
  //       );
  //   });
  // }

  createHero(hero: Superhero2){
    return this.httpClient
      .post(`${URL_PREFIX}/heroes`, hero)
      .pipe(
        catchError( (error: HttpErrorResponse) => {
          this.errorHandler.log("Error while creating a hero", error);
          return throwError("Error while creating a hero");
        }));
  }

  updateHero(hero: Superhero, heroId: string){
    return this.httpClient
    .patch(`${URL_PREFIX}/heroes/${heroId}`, hero)
    .pipe(
      catchError( (error: HttpErrorResponse) => {
        this.errorHandler.log("Error while updating a hero", error);
        return throwError("Error while updating a hero");
      }));
  }

  deleteHero(heroId: string){
    return this.httpClient
    .delete(`${URL_PREFIX}/heroes/${heroId}`)
    .pipe(
      catchError( (error: HttpErrorResponse) => {
        this.errorHandler.log("Error while deleting a hero", error);
        return throwError("Error while deleting a hero");
      }));
  }
  
}
