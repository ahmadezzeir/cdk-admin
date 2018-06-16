import { Custom1Component } from './custom1/custom1.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { WelcomeComponent } from "./welcome/welcome.component";
import { Custom2Component } from './custom2/custom2.component';

const customRoutes: Routes = [
  { path: '', component:  WelcomeComponent , children: [
  { path: 'Custom1', component:  Custom1Component },
  { path: 'Custom2', component:  Custom2Component }
]
  };

@NgModule({
  imports: [
    RouterModule.forChild(customRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomRouterModule {}
