import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from'@angular/fire/compat/database';
//import de formulaire//
import{FormsModule, ReactiveFormsModule}from '@angular/forms';



const firebaseConfig = {

  apiKey: 'AIzaSyBuKBZ7W_3AL_Sx5z65ShFV1wH_PAs_7Hk',

  authDomain: 'enroll-50.firebaseapp.com',

  databaseURL: 'https://enroll-50-default-rtdb.europe-west1.firebasedatabase.app',

  projectId: 'enroll-50',

  storageBucket: 'enroll-50.appspot.com',

  messagingSenderId: '946776757828',

  appId: '1:946776757828:web:ed31ac8ced2dc290be4e11'

};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}


