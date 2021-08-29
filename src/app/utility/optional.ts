export class Optional {
  constructor(private value: any) {
  }

  public static of(value: any): Optional {
    return new Optional(value);
  }

  public static isValid(value: string | undefined): boolean {
    return !!(value && value.toString().trim() !== '');
  }

  public static ifTrue(value: any): { then: (exec: (value: any) => void) => void } {
    let evaluation: boolean = value;

    const isArray = Array.isArray(value);
    evaluation = isArray ? evaluation && value.length > 0 : evaluation;

    function then(exec: (value: any) => void): void {
      if (evaluation) {
        exec(value);
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
