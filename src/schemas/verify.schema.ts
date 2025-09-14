import * as z from 'zod'


export const verifySchema = z.object({
    resetCode:z.string()
    
})

export type verifySchemaForm = z.infer<typeof verifySchema>