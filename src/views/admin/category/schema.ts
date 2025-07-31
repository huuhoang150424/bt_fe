import * as yup from 'yup';

export const categorySchema = yup.object().shape({
    name: yup
        .string()
        .required('Tên danh mục là bắt buộc')
        .min(2, 'Tên danh mục phải có ít nhất 2 ký tự')
        .max(100, 'Tên danh mục không được vượt quá 100 ký tự'),
});