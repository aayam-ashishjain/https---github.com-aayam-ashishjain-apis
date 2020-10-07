import {HttpErrors} from '@loopback/rest';
import * as isEmail from 'isemail';

export function ValidateEmail(email: string) {
  if (!isEmail.validate(email)) {
    throw new HttpErrors.UnprocessableEntity('Invalid Email');
  }
}

export function ValidatePassword(password: string) {
  var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  var reg = new RegExp(pattern);
  var res = password.match(pattern);
  if (!res) {
    throw new HttpErrors.UnprocessableEntity('Invalid Password');
  }
}
