import {ValidatorFn} from '@angular/forms';

export enum ControlType {
  CONTROL = 'control', GROUP = 'group', ARRAY = 'array',
}

export interface GroupConfig {
  name: string;
  label: string;
  type: ControlType;
  fields: FieldConfig[];
  validations?: ValidatorFn[];
}

export interface FieldConfig {
  name: string;
  label: string;
  value?: any;
  required?: boolean;
  validators?: ValidatorFn[];
}

export enum ComponentType {
  beneficiaryInfo = 'beneficiaryInfo',
  address = 'address',
  beneficiaryBank = 'beneficiaryBank'
}

export class BeneficiaryConfig {

  private static BENEFICIARY_INFO: GroupConfig = {
    name: ComponentType.beneficiaryInfo,
    label: 'Beneficiary Info',
    type: ControlType.CONTROL,
    fields: [
      {
        name: 'name',
        label: 'Name',
        required: true
      },
      {
        name: 'nationality',
        label: 'Nationality',
        required: true
      }
    ]
  };

  private static ADDRESS: GroupConfig = {
    name: ComponentType.address,
    label: 'Address',
    type: ControlType.GROUP,
    fields: [
      {
        name: 'address1',
        label: 'Address 1',
        required: true
      },
      {
        name: 'address2',
        label: 'Address 2'
      },
      {
        name: 'street',
        label: 'Street'
      },
      {
        name: 'city',
        label: 'City',
        required: true
      },
      {
        name: 'country',
        label: 'Country',
        required: true
      }
    ]
  };

  private static BENEFICIARY_BANK: GroupConfig = {
    name: ComponentType.beneficiaryBank,
    label: 'Beneficiary Bank',
    type: ControlType.ARRAY,
    fields: [
      {
        name: 'correspondentBank',
        label: 'Correspondent Bank',
        required: true
      },
      {
        name: 'swiftCode',
        label: 'Swift Code',
        required: true
      },
      {
        name: 'accountNumber',
        label: 'Account Number'
      }
    ]
  };

  public static coreConfig: Map<ComponentType, GroupConfig> = new Map([
    [ComponentType.beneficiaryInfo, BeneficiaryConfig.BENEFICIARY_INFO],
    [ComponentType.address, BeneficiaryConfig.ADDRESS],
    [ComponentType.beneficiaryBank, BeneficiaryConfig.BENEFICIARY_BANK]
  ]);

}

export class BeneficiaryConfigHelper {

  public static getComponentType(componentName: string): ComponentType {
    const componentType: ComponentType = (ComponentType as any)[componentName];
    if (!componentType) {
      throw new Error(`failed to find component type of : [${componentName}]`);
    }
    return componentType;
  }
}
