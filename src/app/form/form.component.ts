import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @ViewChild('mainForm', { static: false }) form: NgForm;
  user = {
    email: '',
    selectForm: 'stable',
    genderRadio: 'male',
    password: '',
    confirmPassword: ''
  };
  userData = {
    email: '',
    selectForm: '',
    genderRadio: '',
    password: '',
    confirmPassword: ''
  };
  submitted = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(value) {
    this.submitted = true;
    this.userData.email = this.form.value.email;
    this.userData.selectForm = this.form.value.selectForm;
    this.userData.genderRadio = this.form.value.genderRadio;
    this.userData.password = this.form.value.password;
    this.userData.confirmPassword = this.form.value.confirmPassword;
    
    this.form.reset();
  }
}
