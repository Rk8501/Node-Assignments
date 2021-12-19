import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplaydatatypesComponent } from './displaydatatypes/displaydatatypes.component';
import { DisplaylistComponent } from './displaylist/displaylist.component';
import { DisplaycomboComponent } from './displaycombo/displaycombo.component';
import { DisplayformComponent } from './displayform/displayform.component';
import { DisplayformdataComponent } from './displayformdata/displayformdata.component';
import { DisplayselectionComponent } from './displayselection/displayselection.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes:Routes = [
  {
    path: '', component:AppComponent
  },
  {
    path:'displaydatatypes', component: DisplaydatatypesComponent
  },
  {
    path:'displaylist', component: DisplaylistComponent
  },
  {
    path:'displaycombo', component: DisplaycomboComponent
  },
  {
    path:'displayselection', component: DisplayselectionComponent
  },
  {
    path:'displayform', component: DisplayformComponent
  },
  {
    path:'displayformdata', component: DisplayformdataComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    DisplaydatatypesComponent,
    DisplaylistComponent,
    DisplaycomboComponent,
    DisplayformComponent,
    DisplayformdataComponent,
    DisplayselectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
