import * as z from 'zod'


export const resetSchema = z.object({
    email:z.string(),
    newPassword:z.string()
    
})

export type resetSchemaForm = z.infer<typeof resetSchema>