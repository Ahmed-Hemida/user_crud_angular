import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
// import { CustomersComponent } from './customers/customers.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    // CustomersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule // add this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
