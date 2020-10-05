import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstructorComponent } from './components/constructor/constructor.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailsComponent } from './components/details/details.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { EvolutionComponent } from './components/evolution/evolution.component';
import { InvestorsComponent } from './components/investors/investors.component';
import { StaffteamComponent } from './components/staffteam/staffteam.component';

const routes: Routes = [
  {path: "", component: DetailsComponent},
  {path: "details", component: DetailsComponent},
  {path: "documentation", component: DocumentationComponent},
  {path: "evolution", component: EvolutionComponent},
  {path: "staffteam", component: StaffteamComponent},
  {path: "investors", component: InvestorsComponent},
  {path: "constructor", component: ConstructorComponent},
  {path: "contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
