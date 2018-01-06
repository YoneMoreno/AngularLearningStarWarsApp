import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {ToastService} from '../src/app/core/toast/toast.service';
import 'rxjs/add/observable/of';

@Injectable()
export class ExceptionService {
  constructor(private toastService: ToastService) {
  }

  catchBadResponse: (errorReponse: any) => Observable<any> = (errorResponse: any) => {
    const res = <Response>errorResponse;
    const err = res.json();
    const emsg = err ?
      (err.error ? err.error : JSON.stringify(err)) :
      (res.statusText || 'unknown error');
    this.toastService.activate(`Error - Bad Response - ${emsg}`);
    return Observable.of(false);
  }
}



