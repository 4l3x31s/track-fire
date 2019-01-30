import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Device } from '@ionic-native/device/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import * as firebase from 'Firebase';

export const firebaseConfig = {
  apiKey: 'AIzaSyDR8UMcHDWYnf7TVjE0Z6r5aKE3viAwnyk',
  authDomain: 'geotracker-79f2e.firebaseapp.com',
  databaseURL: 'https://geotracker-79f2e.firebaseio.com',
  projectId: 'geotracker-79f2e',
  storageBucket: 'geotracker-79f2e.appspot.com',
  messagingSenderId: '729611587224'
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Geolocation,
    Device
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
