'use client'

import Verifycode from '@/apis/Verify'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { verifySchema, verifySchemaForm } from '@/schemas/verify.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function Verify() {
    const form = useForm<verifySchemaForm>({
        resolver:zodResolver(verifySchema),
        defaultValues:{
            resetCode:''
        }
    })

async function OnSubmit(data:verifySchemaForm){
    const resetCode = data.resetCode
    const res =await Verifycode({resetCode})
   
     if(res.status==='Success'){
           window.location.href='/reset-password'
    }
}
  return (
    <div>
        <Form {...form}>
            <form className='w-[90%] mx-auto my-30' onSubmit={form.handleSubmit(OnSubmit)}>
            <h2 className='text-gray-800 font-medium text-3xl'>reset your account password</h2>
            <FormField
        
        name='resetCode'
        control={form.control}
        render={({field})=>(
            <FormItem className='mb-8 mt-2'>
                <FormLabel></FormLabel>
                <FormControl>
                    <Input placeholder='code' {...field}/>
                </FormControl>
                <FormMessage />
            </FormItem>

        )}  
/>
            <button className='rounded-[4px] cursor-pointer transition duration-300 bg-transparent my-3 px-2 py-2.5 border border-main2 text-main2 hover:bg-main2 hover:text-white'>verify</button>
        </form>
        </Form>
        
        
    </div>
  )
}
