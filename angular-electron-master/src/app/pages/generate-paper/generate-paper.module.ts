import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbSelectModule,
  NbStepperModule,
  NbTabsetModule,
  NbUserModule,
} from '@nebular/theme';
import {ThemeModule} from '../../@theme/theme.module';
import {LayoutRoutingModule} from '../layout/layout-routing.module';
import {ManuallyComponent} from './manually/manually.component';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    LayoutRoutingModule,
    NbSelectModule
  ],
  declarations: [
    ManuallyComponent],
  providers: [],
})
export class GeneratePaperModule {
}
