import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {ExceptionService} from './exception.service';
import {EntityService} from './entity.service';
import {MessageService} from './message.service';
import {NavComponent} from '../src/app/core/nav/nav.component';
import {ToastModule} from '../src/app/core/toast/toast.module';
import {ModalModule} from "../src/app/core/modal/modal.module";

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
})
