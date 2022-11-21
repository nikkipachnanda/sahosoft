import { AbstractControl, ValidatorFn } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export function duplicateEmailCheck():ValidatorFn 
{
    return (control: AbstractControl):{[key:string]: boolean}| null => 
    {
        if(control.value.trim() =="user") {
            return {'NameNotAllowed': true};
        }

        return null;
    };


    
}

