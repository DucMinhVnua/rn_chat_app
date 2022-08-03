import FieldDatasModel from '../../models/FieldModel';
import DATA_UI from './dataui';

export const DATASFIELD = (formValue: any) => {
   return {
      username: new (FieldDatasModel as any)(
         DATA_UI.placeholderUsername,
         DATA_UI.fieldNameUsername,
         formValue.username,
      ),
      password: new (FieldDatasModel as any)(
         DATA_UI.placeholderPassword,
         DATA_UI.fieldNamePassword,
         formValue.password,
      ),
   };
};

export const DATA_FORM_DEFAULT = {
   username: {value: ''},
   password: {value: ''},
};

export const NOTIFICATIONS = {
   notExisted: 'Tài khoản hoặc mật khẩu không chính xác!',
   error: 'Lỗi',
};
