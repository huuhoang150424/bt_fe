import * as yup from 'yup';

export const loginSchema = yup.object({
  username: yup.string().required('Tên đăng nhập là bắt buộc'),
  password: yup
    .string()
    .min(4, 'Mật khẩu phải ít nhất 4 ký tự')
    .required('Mật khẩu là bắt buộc'),
});
