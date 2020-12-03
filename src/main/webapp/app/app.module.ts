import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JHipsterBugtrackerSharedModule } from 'app/shared/shared.module';
import { JHipsterBugtrackerCoreModule } from 'app/core/core.module';
import { JHipsterBugtrackerAppRoutingModule } from './app-routing.module';
import { JHipsterBugtrackerHomeModule } from './home/home.module';
import { JHipsterBugtrackerEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JHipsterBugtrackerSharedModule,
    JHipsterBugtrackerCoreModule,
    JHipsterBugtrackerHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JHipsterBugtrackerEntityModule,
    JHipsterBugtrackerAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class JHipsterBugtrackerAppModule {}
