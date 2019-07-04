import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false; // This will validate that the form has been submitted
  success = false;

  constructor(private formBuilder: FormBuilder) { 
   this.messageForm = this.formBuilder.group({
      name: ['', Validators.required], // default value is empty, and here the validation rules are set
      message: ['', Validators.required] // text area for the message
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }

    this.success = true;
    }
  }