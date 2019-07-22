import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {HomeComponent} from './home/home.component';
import {TeamComponent} from './about-us/team/team.component';
import {PortfolioComponent} from './about-us/portfolio/portfolio.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SampleAboutComponent} from './sample-about/sample-about.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'about-us/team', component: TeamComponent},
  {path: 'about-us/portfolio', component: PortfolioComponent},
  { path: 'not-found', component: PageNotFoundComponent },
  { path: 'sample-about', component: SampleAboutComponent },
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
