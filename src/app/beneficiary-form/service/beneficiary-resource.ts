export interface BeneficiaryResource {
  name?: string;
  nationality?: string;
  address?: AddressResource;
  beneficiaryBank?: BeneficiaryBankResource[];
}

export interface AddressResource {
  address1?: string;
  address2?: string;
  street?: string;
  city?: string;
  country?: string;
}

export interface BeneficiaryBankResource {
  bankName?: string;
  swiftCode?: string;
  accountNumber?: string;
}
