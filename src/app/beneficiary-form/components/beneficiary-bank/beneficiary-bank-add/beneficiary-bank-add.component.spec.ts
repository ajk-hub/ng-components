import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BeneficiaryBankAddComponent} from './beneficiary-bank-add.component';

describe('BeneficiaryBankAddComponent', () => {
  let component: BeneficiaryBankAddComponent;
  let fixture: ComponentFixture<BeneficiaryBankAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeneficiaryBankAddComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiaryBankAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
