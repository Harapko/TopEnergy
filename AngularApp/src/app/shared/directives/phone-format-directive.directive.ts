import {Directive, HostListener} from '@angular/core';
import {NgControl} from "@angular/forms";

@Directive({
  selector: '[appPhoneFormatDirective]',
  standalone: true
})
export class PhoneFormatDirectiveDirective {
  constructor(private control: NgControl) {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/\D/g, ''); // Remove all non-digit characters
    const formattedValue = this.formatPhoneNumber(value);
    this.control.control?.setValue(formattedValue);
  }

  private formatPhoneNumber(value: string): string {
    if (value.length > 0) {
      const countryCode = '+380';
      const areaCode = value.slice(3, 5);
      const firstPart = value.slice(5, 8);
      const secondPart = value.slice(8, 10);
      const thirdPart = value.slice(10, 12);
      return `${countryCode} ${areaCode} ${firstPart} ${secondPart} ${thirdPart}`.trim();
    }
    return '';
  }
}
