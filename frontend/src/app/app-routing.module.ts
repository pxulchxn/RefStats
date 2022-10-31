import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from "./test/test.component";
import { AppLayoutComponent } from "./layout/app.layout.component";

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      {path: '', component: TestComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
