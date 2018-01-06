import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {EntityService} from './entity.service';
import {ExceptionService} from './exception.service';
import {MessageService} from './message.service';
import {ModalModule} from '../src/app/core/modal/modal.module';
import {SpinnerModule} from '../src/app/core/spinner/spinner.module';
import {ToastModule} from '../src/app/core/toast/toast.module';
import {NavComponent} from '../src/app/core/nav/nav.component';

// imports: imports the module's exports. which is usually declarables and providers
// in our case the spinner has no providers.
//
// exports: exports modules AND components/directives/pipes that other modules may want to use
@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule,
    ModalModule, SpinnerModule, ToastModule
  ],
  exports: [
    CommonModule, FormsModule, RouterModule,
    ModalModule, SpinnerModule, ToastModule, [NavComponent]
  ],
  declarations: [NavComponent],
  providers: [
    EntityService,
    ExceptionService,
    MessageService,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}


