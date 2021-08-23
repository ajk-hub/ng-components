import * as currCode from 'currency-codes';

export class AmountCurrencyHandler {

  constructor(private amount: string,
              private currency: string) {
  }

  public static of(amount: string, currency: string): AmountCurrencyHandler {
    const initialAmount = amount && amount !== '' ? amount : '0.0';
    return new AmountCurrencyHandler(
      AmountCurrencyHandler.removeComma(initialAmount),
      currency
    );
  }

  public static removeComma(amount: string): string {
    return amount.split(',').join('');
  }

  public formatAmountWithCommaAndDecimal(): string {
    if (this.currency && Number(this.amount) >= 0) {

      const digits = currCode.code(this.currency)?.digits;
      return digits ? `${this.addCommaInAmount(this.addOrRemoveDigits(digits))}` : '';
    }

    return this.amount;
  }

  private addOrRemoveDigits(digits: number): string {
    const decimalSplit = this.amount.toString().split('.');

    if (decimalSplit[1] && decimalSplit[1].length > digits) {

      const decimalValue = decimalSplit[1].substr(0, digits);
      return `${decimalSplit[0]}.${decimalValue}`;

    }

    return Number(this.amount).toFixed(digits);
  }

  private addCommaInAmount(amount: string): string {
    if (amount) {
      const splitByDecimal = amount.split('.');

      splitByDecimal[0] = splitByDecimal[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

      return splitByDecimal.join('.');
    }
    return amount;
  }

}
