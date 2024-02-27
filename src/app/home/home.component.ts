import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})  
export class HomeComponent {
  
  
  inputVal: string = 'ashoish'; // इनपुट फ़ील्ड का मान स्थानित करें
  inputName: string = 'ashish'; // इनपुट फ़ील्ड का एरिया-लेबल स्थानित करें


  inputValue: string = 'ghdhgd'; // Bind this to your first input field
  inputDisabled: boolean = false; // Bind this to your input field's disabled property

  toggleDisable() {
    this.inputDisabled = !this.inputDisabled; // Toggle the value of inputDisabled
  }

  onInputClick() {
    this.inputDisabled = true; // Set inputDisabled to true when the input field is clicked



    
  }
}
