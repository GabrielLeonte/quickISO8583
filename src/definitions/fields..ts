import { ISO8583FieldsEnum } from "../typeDefinitions/ISO8583Types";

type ISO8583FieldsPropertiesType = {
  [field in ISO8583FieldsEnum]: {
    fixedLength: boolean;
    length: number;
  };
};

export const ISO8583FieldsProperties: ISO8583FieldsPropertiesType = {
  [ISO8583FieldsEnum.PRIMARY_ACCOUNT_NUMBER]: {
    fixedLength: false,
    length: 19,
  },
  [ISO8583FieldsEnum.PROCESSING_CODE]: {
    fixedLength: true,
    length: 6,
  },
  [ISO8583FieldsEnum.TRANSACTION_AMOUNT]: {
    fixedLength: true,
    length: 12,
  },
  [ISO8583FieldsEnum.TRANSMISSION_DATE_AND_TIME]: {
    fixedLength: true,
    length: 10, // MMDDhhmmss
  },
  [ISO8583FieldsEnum.SYSTEM_TRACE_AUDIT_NUMBER]: {
    fixedLength: true,
    length: 6,
  },
  [ISO8583FieldsEnum.LOCAL_TRANSACTION_TIME]: {
    fixedLength: true,
    length: 6,
  },
  [ISO8583FieldsEnum.LOCAL_TRANSACTION_DATE]: {
    fixedLength: true,
    length: 6,
  },
  [ISO8583FieldsEnum.EXPIRATION_DATE]: {
    fixedLength: true,
    length: 4,
  },
  [ISO8583FieldsEnum.MERCHANT_TYPE]: {
    fixedLength: true,
    length: 4,
  },
  [ISO8583FieldsEnum.MESSAGE_REASON_CODE]: {
    fixedLength: true,
    length: 2,
  },
  [ISO8583FieldsEnum.ACQUIRING_INSTITUTION_IDENTIFICATION_CODE]: {
    fixedLength: false,
    length: 11,
  },
  [ISO8583FieldsEnum.TRACK_2_DATA]: {
    fixedLength: false,
    length: 37,
  },
  [ISO8583FieldsEnum.RETRIEVAL_REFERENCE_NUMBER]: {
    fixedLength: true,
    length: 12,
  },
  [ISO8583FieldsEnum.APPROVAL_CODE]: {
    fixedLength: true,
    length: 6,
  },
  [ISO8583FieldsEnum.RESPONSE_CODE]: {
    fixedLength: true,
    length: 2,
  },
  [ISO8583FieldsEnum.CARD_ACCEPTOR_TERMINAL_IDENTIFICATION]: {
    fixedLength: true,
    length: 8,
  },
  [ISO8583FieldsEnum.CARD_ACCEPTOR_IDENTIFICATION_CODE]: {
    fixedLength: true,
    length: 15,
  },
  [ISO8583FieldsEnum.CARD_ACCEPTOR_NAME]: {
    fixedLength: true,
    length: 40,
  },

  [ISO8583FieldsEnum.ADDITIONAL_DATA]: {
    fixedLength: false,
    length: 25,
  },
  [ISO8583FieldsEnum.TRACK_1_DATA]: {
    fixedLength: false,
    length: 76,
  },
  [ISO8583FieldsEnum.TRANSACTION_CURRENCY_CODE]: {
    fixedLength: true,
    length: 3,
  },
  [ISO8583FieldsEnum.PERSONAL_IDENTIFICATION_NUMBER]: {
    fixedLength: true,
    length: 8,
  },
  [ISO8583FieldsEnum.SECURITY_RELATED_CONTROL_INFORMATION]: {
    fixedLength: true,
    length: 48,
  },
  [ISO8583FieldsEnum.ADDITIONAL_AMOUNTS]: {
    fixedLength: false,
    length: 120, // TODO: More research
  },
};
