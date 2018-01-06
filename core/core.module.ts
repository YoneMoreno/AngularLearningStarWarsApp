import {ModalModule} from './modal/modal.module';
import {SpinnerModule} from './spinner/spinner.module';
import {ToastModule} from './toast/toast.module';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule, Optional, SkipSelf} from "@angular/core";
import {ExceptionService} from "./exception.service";
import {EntityService} from "./entity.service";
import {MessageService} from "./message.service";

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
