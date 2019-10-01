import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { OffersComponent } from './offers/offers.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MainService } from './main.service';
import { FleetPriceComponent } from './fleet-price/fleet-price.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookComponent } from './book/book.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule ,OWL_DATE_TIME_LOCALE} from 'ng-pick-datetime';
import { AddvComponent } from './addv/addv.component';
import { AdminopComponent } from './adminop/adminop.component';
import { RemovevComponent } from './removev/removev.component';
import { BiketypeComponent } from './biketype/biketype.component';
import { ScooterComponent } from './scooter/scooter.component';
import { StandardComponent } from './standard/standard.component';
import { SportsComponent } from './sports/sports.component';
import { CruiserComponent } from './cruiser/cruiser.component';
import { SetPriceComponent } from './set-price/set-price.component';
import { CurrencyPipe } from '@angular/common';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooklistsComponent } from './booklists/booklists.component';
import { FooterComponent } from './footer/footer.component';
import { AllbookComponent } from './allbook/allbook.component';
import { ChangenameComponent } from './changename/changename.component';


export const MY_NATIVE_FORMATS = {
  fullPickerInput: {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'},
  datePickerInput: {year: 'numeric', month: 'numeric', day: 'numeric'},
  timePickerInput: {hour: 'numeric', minute: 'numeric'}
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OffersComponent,
    LoginSignupComponent,
    LoginComponent,
    SignupComponent,
    FleetPriceComponent,
    AboutUsComponent,
    BookComponent,
    EditprofileComponent,
    AddvComponent,
    AdminopComponent,
    RemovevComponent,
    BiketypeComponent,
    ScooterComponent,
    StandardComponent,
    SportsComponent,
    CruiserComponent,
    SetPriceComponent,
    BookDetailsComponent,
    BooklistsComponent,
    FooterComponent,
    AllbookComponent,
    ChangenameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{path:'',redirectTo:'/home',pathMatch:'full'},
      {path:'home',component:HomeComponent},
      
    {path:'biketype/:region/:pick/:drop',  component:BiketypeComponent,
    },
    {path:'login-signup',  component:LoginSignupComponent,
    children:[{path:'login',component:LoginComponent},{path:'signup',component:SignupComponent}]},
    {path:'adminop',  component:AdminopComponent,
    children:[{path:'addv',component:AddvComponent},{path:'removev',component:RemovevComponent},
    {path:'set-price',component:SetPriceComponent},{path:'allbook',component:AllbookComponent}, {path:'changename',component:ChangenameComponent},]},
    {path:'offers',component:OffersComponent},
    {path:'fleet-price',component:FleetPriceComponent},
    {path:'about-us',component:AboutUsComponent},
    {path:'book',component:BookComponent},
    {path:'editprofile',component:EditprofileComponent},
    {path:'addv',component:AddvComponent},
    {path:'book-details/:vehicle/:region/:pickup/:pick/:drop/:amount',component:BookDetailsComponent}
  ]),
  OwlDateTimeModule, 
         OwlNativeDateTimeModule,
         BrowserAnimationsModule,
  ],
  providers: [MainService,{provide: OWL_DATE_TIME_LOCALE, useValue: 'en-GB'},CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
