export class Optional {
  constructor(private value: any) {
  }

  public static of(value: any): Optional {
    return new Optional(value);
  }

  public static isValid(value: string): boolean {
    return !!(value && value !== '');
  }

  public static ifValid(condition: boolean): { then: (exec: () => void) => void } {
    function then(exec: () => void): void {
      if (condition) {
        exec();
      }
    }

    return {then};
  }

  public ifExist(executor: (value: any) => void): void {
    if (this.value) {
      executor(this.value);
    }
  }

  public ifNotExist(executor: (value: any) => void): void {
    if (!this.value) {
      executor(this.value);
    }
  }

}
