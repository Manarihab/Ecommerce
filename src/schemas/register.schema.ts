import * as z from 'zod'


export const RegisterSchema = z.object({
    name:z.string().nonempty('this field is required').min(2,'min 2 char').max(10,'max 10 char'),
    email:z.string().nonempty('this field is required').email('not valid email'),
    password:z.string().nonempty('this field is required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
    rePassword:z.string().nonempty('this field is required'),
    phone:z.string().nonempty('this field is required').regex(/^(002)?(01)[0-25]\d{8}$/)
}).refine((data)=>data.password===data.rePassword,{
    path:['rePassword'],
    message:'not the same'
})

export type RegisterSchemaForm = z.infer<typeof RegisterSchema>