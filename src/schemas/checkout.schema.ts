import * as z from 'zod'


export const checkSchema = z.object({
    details:z.string().nonempty('this field is required').min(3,'details min length is 3'),
    city:z.string().nonempty('this field is required').min(3,'min 3 char'),
    phone:z.string().nonempty('this field is required').regex(/^(002)?(01)[0-25]\d{8}$/)
})

export type checkSchemaForm = z.infer<typeof checkSchema>