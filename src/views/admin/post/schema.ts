
import * as yup from 'yup';

export const postSchema = yup.object().shape({
  title: yup
    .string()
    .required('Tiêu đề là bắt buộc')
    .min(2, 'Tiêu đề phải có ít nhất 2 ký tự')
    .max(200, 'Tiêu đề không được vượt quá 200 ký tự'),
  content: yup
    .string()
    .required('Nội dung là bắt buộc')
    .min(10, 'Nội dung phải có ít nhất 10 ký tự')
    .max(10000, 'Nội dung không được vượt quá 10000 ký tự'),
  categoryId: yup
    .string()
    .required('Vui lòng chọn danh mục')
    .matches(/^[0-9a-fA-F]{24}$/, 'Danh mục không hợp lệ'),
  file: yup
    .mixed()
    .nullable()
    .test('fileSize', 'Ảnh không được vượt quá 5MB', (value) => {
      if (!value) return true;
      if (value instanceof File) {
        return value.size <= 5 * 1024 * 1024; // 5MB
      }
      return true;
    })
    .test('fileType', 'Chỉ hỗ trợ định dạng ảnh (jpg, png, jpeg)', (value) => {
      if (!value) return true;
      if (value instanceof File) {
        return ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type);
      }
      return true;
    }),
});
