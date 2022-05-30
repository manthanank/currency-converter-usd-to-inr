import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertorComponent } from './components/convertor/convertor.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'convertor',
    pathMatch: 'full',
  },
  {
    path: 'convertor',
    component: ConvertorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
