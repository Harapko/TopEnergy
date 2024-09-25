import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {FadeOnScrollDirectiveDirective} from "../../../shared/directives/fade-on-scroll-directive.directive";
import {NgIf} from "@angular/common";
import {PhoneFormatDirectiveDirective} from "../../../shared/directives/phone-format-directive.directive";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FadeOnScrollDirectiveDirective,
    NgIf,
    PhoneFormatDirectiveDirective
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  charCount: number = 0;

  onInput(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    this.charCount = textarea.value.length;
  }

  telegramForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.telegramForm = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['+380 ', [Validators.required, Validators.minLength(10)]],
      message: ['', Validators.required],
    });
  }


  sendMessage() {
    const botToken = '';
    const chatId = '';
    const message = this.telegramForm.value;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    if (this.telegramForm.valid){
      this.http.post(url, {
        chat_id: chatId,
        text: `User: ${this.telegramForm.value.user}\nEmail: ${this.telegramForm.value.email}\nPhone: ${this.telegramForm.value.phoneNumber}\nMessage: ${this.telegramForm.value.message}`
      }).subscribe(response => {
          console.log('Message sent:', response);
        },
        error => console.log(error))
    }

  }
}


