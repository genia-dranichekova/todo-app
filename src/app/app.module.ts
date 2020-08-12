import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ActiveComponent } from './active/active.component';
import { CompletedComponent } from './completed/completed.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveComponent,
    CompletedComponent,
    EditComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MatDialogModule
    ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditComponent]
})
export class AppModule { }
