import { Pipe, PipeTransform } from '@angular/core';
/*
 * Pipe function that takes a string as input and validates the following:
* a.        The given string is an integer
* b.        The given string is at least 3 characters long
* c.        The given string contains at least a 9
*/
@Pipe({name: 'inputValidator'})
export class inputValidatorPipe implements PipeTransform {
  transform(input: string): string {
   let message1 = "The string should be an integer. ";
   let message2 = "The inserted text is too short. ";
   let message3 = "The string should contains at least a 9. ";
   let error = false ;
   
    if(/^[0-9]+$/.test(input)){ //The given string is an integer
        message1 = "";
    }  if(/^.{3,}$/.test(input)) { //The given string is at least 3 characters long
        message2 = "";
    }  if(/(?=.*[9])/.test(input)) { //The given string contains at least a 9
        message3 = "";
    }

   
   let message = message1 + message2 + message3;
    if((message) ==""){
    message = "validated";
    }
    return ( message) ;
    
    
  }
}