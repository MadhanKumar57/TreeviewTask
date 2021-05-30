import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ShContextMenuModule} from 'ng2-right-click-menu';
import { IntegralUIModule } from '../../node_modules/@lidorsystems/integralui-web/bin/integralui/integralui.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    IntegralUIModule,
    BrowserModule,
    ShContextMenuModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
