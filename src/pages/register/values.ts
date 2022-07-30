import FieldDatasModel from '../../models/FieldModel';
import FormModel from '../../models/FormModel';
import DATA_UI from './dataui';

export const DATA_FORM_DEFAULT = {
  username: {
    value: '',
    isFocused: false,
  },
  password: {
    value: '',
    isFocused: false,
  },
  confirmPassword: {
    value: '',
    isFocused: false,
  },
};

export const defaultErrorTitle = 'required';
export const titleErrorDontMatch = "don't match";

export const DATASFIELD = (formValue: any) => {
  return {
    username: new (FieldDatasModel as any)(
      DATA_UI.placeholderUsername,
      DATA_UI.fieldNameUsername,
      formValue.username.value,
      formValue.username.isFocused,
      defaultErrorTitle,
    ),
    password: new (FieldDatasModel as any)(
      DATA_UI.placeholderPassword,
      DATA_UI.fieldNamePassword,
      formValue.password.value,
      formValue.password.isFocused,
      defaultErrorTitle,
    ),
    confirmPassword: new (FieldDatasModel as any)(
      DATA_UI.placeholderConfirmPassword,
      DATA_UI.fieldNameConfirmPassword,
      formValue.confirmPassword.value,
      formValue.confirmPassword.isFocused,
      new (FormModel as any)(
        null,
        formValue.password.value,
        formValue.confirmPassword.value,
      ).isTwoFieldSame()
        ? defaultErrorTitle
        : titleErrorDontMatch,
    ),
  };
};

export const BODY_REQUEST = (formValue: any) => {
  return {
    username: formValue.username.value,
    password: formValue.password.value,
  };
};

export const NOTIFICATIONS = {
  alreadyExists: 'Tài khoản đã tồn tại!',
  error: 'Lỗi!',
};
