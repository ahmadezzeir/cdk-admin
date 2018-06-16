import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomRouterModule } from './custom.router';
import { Custom1Component } from './custom1/custom1.component';
import { Custom2Component } from './custom2/custom2.component';

@NgModule({
  imports: [
    CommonModule,
    CustomRouterModule
  ],
  declarations: [WelcomeComponent, Custom1Component, Custom2Component]
})
export class CustomModule { }
