import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss']
})
export class FormSectionComponent implements OnInit {

  successActive:boolean = false;

  contact = {
    name: '',
    email: '',
    message: '',
  };
  post = {
    endPoint: 'http://cagri-avsar.developerakademie.com/send_mail.php', // Ex. www.my-domain/sendMail.php
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(ngForm: any) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contact))
        .subscribe({
          next: (response) => console.log(response),
          error: (error) => console.error(error),
          complete: () => console.info('send post complete'),
        });
    }
    this.contact = {
      name: '',
      email: '',
      message: '',
    };
  }

  showSending() {
    this.successActive = true;
    setTimeout(() => {
      this.successActive = false;
    }, 1500);
  }
}


