import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConverterDetailComponent } from './converter-detail/converter-detail.component';
import { ConverterMainComponent } from './converter-main/converter-main.component';

const routes: Routes = [
  {
    path: '', component: ConverterMainComponent
  },{
    path: 'home', component: ConverterMainComponent
  },
  {
    path: 'detail/:from/:to', component: ConverterDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
