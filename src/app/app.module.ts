import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HerosectionComponent } from './herosection/herosection.component';
import { WhyussectionComponent } from './whyussection/whyussection.component';
import { AboutComponent } from './about/about.component';
import { CountsectionComponent } from './countsection/countsection.component';
import { ServicesectionComponent } from './servicesection/servicesection.component';
import { AppointmentsectionComponent } from './appointmentsection/appointmentsection.component';
import { DepartmentsectionComponent } from './departmentsection/departmentsection.component';
import { DoctorssectionComponent } from './doctorssection/doctorssection.component';
import { QuestionsectionComponent } from './questionsection/questionsection.component';
import { TestimonialsectionComponent } from './testimonialsection/testimonialsection.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsectionComponent } from './contactsection/contactsection.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopbarComponent,
    HerosectionComponent,
    WhyussectionComponent,
    AboutComponent,
    CountsectionComponent,
    ServicesectionComponent,
    AppointmentsectionComponent,
    DepartmentsectionComponent,
    DoctorssectionComponent,
    QuestionsectionComponent,
    TestimonialsectionComponent,
    GalleryComponent,
    ContactsectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
