import { Component , EventEmitter, Output} from '@angular/core';
import { NgForm } from '@angular/forms';

export interface Customer {
  firstName: string;
  lastName:string;
  email: string;
  phoneNumber: string;
  address: string;
};

@Component({
  selector: 'app-user-form', // Make sure this matches the selector in the AppComponent template
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  
  users: Customer[] =[];
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = '';
  address: string = '';
  searchText: string = '';
  @Output() addUserData = new EventEmitter<any>();


  handleSubmit(login:NgForm) {
    // Validate input fields
    console.log("ssss",login,this.users)
    if (!this.firstName || !this.lastName || !this.email || !this.phoneNumber || !this.address) {
      alert('Please fill in all fields.');
      return;
    }

    // Create new user data object
    const newUserData:Customer = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      address: this.address,
    };

    // Emit addUserData event with new user data object
    this.addUserData.emit(newUserData);
    this.users.push(newUserData);
    // Reset form fields
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phoneNumber = '';
    this.address = '';
  }

  handleCancel() {
    // Emit addUserData event with null to remove empty row from table
    this.addUserData.emit(null);

    // Reset form fields
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phoneNumber = '';
    this.address = '';
  }
}
