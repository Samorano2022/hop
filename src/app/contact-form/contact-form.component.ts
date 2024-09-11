import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm} from '@angular/forms'
import {ContactService } from '../contact.service';
import { ReactiveFormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [NgForm, FormControl, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  // FormData: FormGroup;
  // constructor(private builder: FormBuilder, private contact: ContactService) { }

  // ngOnInit() {
  //   this.FormData = this.builder.group({
  //     Fullname: new FormControl('', [Validators.required]),
  //     Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
  //     Comment: new FormControl('', [Validators.required])
  //   });
  // }


  // onSubmit(FormData) {
  //   console.log(FormData)
  //   this.contact.PostMessage(FormData)
  //     .subscribe(response => {
  //       location.href = 'https://mailthis.to/confirm'
  //       console.log(response)
  //     }, error => {
  //       console.warn(error.responseText)
  //       console.log({ error })
  //     })
  // }
}
