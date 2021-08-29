import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {BeneficiaryResource} from './beneficiary-resource';
import {Optional} from '../../utility/optional';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {

  beneficiaryData: BeneficiaryResource = {
    name: 'Ashim',
    nationality: 'Nepali',
    address: {
      address1: 'Dhapasi',
      address2: 'Dhapasi',
      street: 'Dhapasi',
      city: 'Kathmandu',
      country: 'Nepal'
    },
    beneficiaryBank: [
      {
        bankName: 'Ashim Bank',
        swiftCode: 'AKNAFAASF',
        accountNumber: '6521365489'
      }
    ]
  };

  getBeneficiary(reference: string | undefined): Observable<BeneficiaryResource> {
    if (Optional.isValid(reference)) {
      return of(this.beneficiaryData)
        .pipe(
          delay(1000)
        );
    } else {
      return of({});
    }
  }

}
