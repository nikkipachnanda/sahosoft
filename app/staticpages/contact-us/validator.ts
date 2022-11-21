import {
    AbstractControl,
    AsyncValidatorFn,
    ValidationErrors,
  } from '@angular/forms';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  import { StaticpagesService } from '../staticpages.service';
  
  export class UsernameValidator {
    static createValidator(userService: StaticpagesService): AsyncValidatorFn {
      return (control: AbstractControl): Observable<ValidationErrors> => {
        return userService
          .checkIfUsernameExists(control.value)
          .pipe(
            map((result: boolean) =>
              result ? { usernameAlreadyExists: true } : null as any
            )
          );
      };
    }
  }