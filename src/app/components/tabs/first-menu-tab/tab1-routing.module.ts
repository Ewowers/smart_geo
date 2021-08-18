import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { LandTendersComponent } from './land-tenders/land-tenders.component';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';
import { AppealComponent } from './appeal/appeal.component';
import { BusRoutesComponent } from './bus-routes/bus-routes.component';
import { EventsComponent } from './events/events.component';
import { AuctionComponent } from './land-tenders/auction/auction.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page
  },
  {
    path: 'land-tenders',
    children: [
      {
        path: '',
        component: LandTendersComponent
      },
      {
        path: 'auction',
        children: [
          {
            path: '',
            component: AuctionComponent
          },
          {
            path: 'map',
            component: EventsComponent
          }
        ]
      },
    ]
  },
  {
    path: 'appointment-doctor',
    component: DoctorAppointmentComponent
  },
  {
    path: 'appeal',
    component: AppealComponent
  },
  {
    path: 'bus-routes',
    component: BusRoutesComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'handbook-of-organisations',
    loadChildren: () => import('./handbook-of-organisations/handbook-of-organisations.module').then( m => m.HandbookOfOrganisationsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
