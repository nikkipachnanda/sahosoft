import { AbstractControl, ValidatorFn } from '@angular/forms';

export function firstnameValidation():ValidatorFn 
{
    return (control: AbstractControl):{[key:string]: boolean}| null => 
    {
        if(control.value.trim() =="user") {
            return {'NameNotAllowed': true};
        }

        return null;
    };
}

