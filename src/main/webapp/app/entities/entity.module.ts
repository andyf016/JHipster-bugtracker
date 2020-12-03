import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'project',
        loadChildren: () => import('./project/project.module').then(m => m.JHipsterBugtrackerProjectModule),
      },
      {
        path: 'label',
        loadChildren: () => import('./label/label.module').then(m => m.JHipsterBugtrackerLabelModule),
      },
      {
        path: 'ticket',
        loadChildren: () => import('./ticket/ticket.module').then(m => m.JHipsterBugtrackerTicketModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class JHipsterBugtrackerEntityModule {}
