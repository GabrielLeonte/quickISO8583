import { ISO8583FieldsProperties } from "./definitions/fields.";
import { ISO8583FieldsEnum } from "./typeDefinitions/ISO8583Types";

class ISO8583 {
  private mti: string;
  private bitmap: string;
  private data: string;

  constructor(mti: string) {
    this.mti = mti;
    this.bitmap = "1" + "".padStart(127, "0");
    this.data = "";
  }

  private updateBitmap(fieldIndex: number) {
    if (fieldIndex > this.bitmap.length - 1) return;

    this.bitmap = this.bitmap.substring(0, fieldIndex - 1) + "1" + this.bitmap.substring(fieldIndex);
  }

  public setField(field: ISO8583FieldsEnum, value: string) {
    this.updateBitmap(field);

    const { fixedLength } = ISO8583FieldsProperties[field];

    this.data += (!fixedLength ? value.length.toString() : "") + value.toString();
  }

  public pack(): string {
    return this.mti + parseInt(this.bitmap, 2).toString(16).toUpperCase() + this.data;
  }
}

const messaaaage = new ISO8583("0100");

messaaaage.setField(ISO8583FieldsEnum.PRIMARY_ACCOUNT_NUMBER, "19191919191919000");
messaaaage.setField(ISO8583FieldsEnum.PROCESSING_CODE, "123456");

console.log(messaaaage.pack());
