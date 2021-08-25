import * as currCode from 'currency-codes';
import {Utility} from './utility';

export class AmountCurrencyHandler {

  public static formatAmount(amount: any, currency: string): string {

    if (Utility.isValid(amount) && Utility.isValid(currency) && Number(this.removeComma(amount)) >= 0) {

      amount = this.removeComma(amount);
      const digits = currCode.code(currency)?.digits;
      return digits ? `${this.addCommaInAmount(this.addOrRemoveDigits(amount, digits))}` : '';
    }

    return amount;
  }

  public static removeComma(amount: string): string {
    return Utility.isValid(amount) ? amount.split(',').join('') : amount;
  }

  private static addOrRemoveDigits(amount: string, digits: number): string {
    const decimalSplit = amount.split('.');

    if (decimalSplit[1] && decimalSplit[1].length > digits) {

      const decimalValue = decimalSplit[1].substr(0, digits);
      return `${decimalSplit[0]}.${decimalValue}`;

    }

    return Number(amount).toFixed(digits);
  }

  private static addCommaInAmount(amount: string): string {
    if (amount) {
      const splitByDecimal = amount.split('.');

      splitByDecimal[0] = splitByDecimal[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

      return splitByDecimal.join('.');
    }
    return amount;
  }

}
