import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropdownDirective } from './dropdown.directive';
import {RouterModule} from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatProgressSpinnerModule, MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TeamTextComponent } from './about-us/display-texts/team-text/team-text.component';
import { PortfolioTextComponent } from './about-us/display-texts/portfolio-text/portfolio-text.component';
import { TeamComponent } from './about-us/team/team.component';
import { PortfolioComponent } from './about-us/portfolio/portfolio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SampleAboutComponent } from './sample-about/sample-about.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    TeamTextComponent,
    PortfolioTextComponent,
    TeamComponent,
    PortfolioComponent,
    PageNotFoundComponent,
    SampleAboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
