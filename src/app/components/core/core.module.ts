import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrowdfundingComponent } from '../crowdfunding/crowdfunding.component';
import { DetailsComponent } from '../details/details.component';
import { EvolutionComponent } from '../evolution/evolution.component';
import { InvestorsComponent } from '../investors/investors.component';
import { ConstructorComponent } from '../constructor/constructor.component';
import { StaffteamComponent } from '../staffteam/staffteam.component';
import { DocumentationComponent } from '../documentation/documentation.component';
import { ContactComponent } from '../contact/contact.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsService } from 'src/app/services/projects.service';


@NgModule({
  declarations: [
    CrowdfundingComponent,
    DetailsComponent,
    EvolutionComponent,
    InvestorsComponent,
    ConstructorComponent,
    StaffteamComponent,
    DocumentationComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    CrowdfundingComponent,
    DetailsComponent,
    EvolutionComponent,
    InvestorsComponent,
    ConstructorComponent,
    StaffteamComponent,
    DocumentationComponent,
    ContactComponent
  ],
  providers: [
    ProjectsService
  ]
})
export class CoreModule { }
