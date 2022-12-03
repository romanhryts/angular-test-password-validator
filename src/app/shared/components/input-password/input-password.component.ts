import { Component } from '@angular/core';


@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.css']
})
export class InputPasswordComponent {
  public strength: string | null = null;

  constructor() {
  }

  public onPasswordEnter(element: EventTarget | null): void {
    const input = element as HTMLInputElement;
    this.checkingPassword(input.value);
  }

  private checkingPassword(password: string): void | null {
    if (!password.length) {
      this.strength = null;
      return null;
    }

    if (password.length < 8) {
      this.strength = 'block';
      return null;
    }

    const hasOneLetter: boolean = /[a-zA-Z]/.test(password);
    const hasOneDigit: boolean = /[0-9]/.test(password);
    const hasOneSymbol: boolean = /[#?!@$%^&*-]/.test(password);

    const lettersAndDigits: boolean = hasOneLetter && hasOneDigit && !hasOneSymbol;
    const lettersAndSymbols: boolean = hasOneLetter && hasOneSymbol && !hasOneDigit;
    const digitsAndSymbols: boolean = hasOneSymbol && hasOneDigit && !hasOneLetter;

    const onlyLetters: boolean = /^[A-Za-z]*$/.test(password);
    const onlyDigits: boolean = /^[0-9]*$/.test(password);
    const onlySymbols: boolean = /^[#?!@$%^&*-]*$/.test(password);

    const isStrong: boolean = hasOneDigit && hasOneLetter && hasOneSymbol;
    const isMedium: boolean = lettersAndDigits || lettersAndSymbols || digitsAndSymbols;
    const isEasy: boolean = onlyDigits || onlyLetters || onlySymbols;

    if (isStrong) {
      this.strength = 'strong';
    }
    if (isMedium) {
      this.strength = 'medium';
    }
    if (isEasy) {
      this.strength = 'easy';
    }

  }

}
