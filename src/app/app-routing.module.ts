import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AboutComponent } from './about/about.component'; 

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'about', component: AboutComponent},
  {path: 'hello', component: HelloWorldComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
