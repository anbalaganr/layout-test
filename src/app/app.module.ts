import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { View2Component } from './view2/view2.component';
import { IgxComboModule, IgxDatePickerModule, IgxExpansionPanelModule, IgxToggleModule, IgxSwitchModule, IgxDropDownModule, IgxNavbarModule, IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { View3Component } from './view3/view3.component';
import { View1Component } from './view1/view1.component';

@NgModule({
  declarations: [
    AppComponent,
    View2Component,
    View3Component,
    View1Component
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxComboModule,
    IgxDatePickerModule,
    FormsModule,
    IgxExpansionPanelModule,
    IgxToggleModule,
    IgxSwitchModule,
    IgxDropDownModule,
    IgxNavbarModule,
    IgxButtonModule,
    IgxIconModule,
    IgxNavigationDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
