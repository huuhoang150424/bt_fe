import * as yup from 'yup';

export const pricingSchema = yup.object({
    name: yup.string().required('Tên gói là bắt buộc'),
    description: yup.string().required('Mô tả là bắt buộc'),
    price: yup
        .number()
        .typeError('Giá phải là số')
        .required('Giá là bắt buộc')
        .min(0, 'Giá không được âm'),
    currency: yup.string().optional(),
    period: yup.string().optional(),
    features: yup
        .array()
        .of(
            yup.object({
                name: yup.string().required('Tên tính năng là bắt buộc'),
                included: yup.boolean().optional(),
            })
        )
        .min(1, 'Phải có ít nhất 1 tính năng'),
});
