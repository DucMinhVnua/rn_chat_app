function FormModel(
    this: any,
    formValue: any,
    fieldValue1: any,
    fieldValue2: any,
    isCheckedFieldSame: boolean,
) {
    this.isCheckedFieldSame = isCheckedFieldSame;
    this.formValue = formValue;
    this.isTwoFieldSame = function () {
        return fieldValue1.trim() === fieldValue2.trim();
    };
    this.checkValidateConfirm = function () {
        if (isCheckedFieldSame) {
            if (!this.isTwoFieldSame()) {
                return true;
            }
        }

        return Object.values(this.formValue).some(
            (itemValue: any) => itemValue.value === '',
        );
    };
}

export default FormModel;
