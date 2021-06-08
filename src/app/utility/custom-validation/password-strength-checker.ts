
import {AbstractControl,ValidationErrors} from '@angular/forms'
export const PasswordStrengthChecker= function(control:AbstractControl):ValidationErrors | null {

 let value :string =control.value || '';
 let UpperCaseCharacter =/[A-Z]+/g;
 if(UpperCaseCharacter.test(value)==false){
     return{passwordstrength: 'Fields has to contain upper case characters ${value}'}
 }
    
 let lowerCaseCharacter =/[a-z]+/g;
 if(lowerCaseCharacter.test(value)==false){
     return{passwordstrength: 'Fields has to contain lower case characters ${value}'}
 }
    
 let specialCharacters =/[!@#$%^&()_+=[\]]+/g;
 if(specialCharacters.test(value)==false){
     return{passwordstrength: 'Fields has to contain special characters  case characters ${value}'}
 }
 return null;
}
