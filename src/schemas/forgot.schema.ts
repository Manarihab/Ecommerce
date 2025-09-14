import * as z from 'zod'


export const forgotSchema = z.object({
    email:z.string()
    
})

export type forgotSchemaForm = z.infer<typeof forgotSchema>