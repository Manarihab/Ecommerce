'use client'

import reset from '@/apis/reset'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { resetSchema, resetSchemaForm } from '@/schemas/reset.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function Reset() {
    const form = useForm<resetSchemaForm>({
        resolver:zodResolver(resetSchema),
        defaultValues:{
            email:'',
            newPassword:''
        }
    })

async function OnSubmit(data:resetSchemaForm){
    const newData = data
    const res =await reset(newData)
    
    if(res.token){
           window.location.href='/'
    }
}
  return (
    <div>
        <Form {...form}>
            <form className='w-[90%] mx-auto my-30' onSubmit={form.handleSubmit(OnSubmit)}>
            <h2 className='text-gray-800 font-medium text-3xl'>reset your account password</h2>
            <FormField
        
        name='email'
        control={form.control}
        render={({field})=>(
            <FormItem className='mb-8 mt-2'>
                <FormLabel></FormLabel>
                <FormControl>
                    <Input placeholder='email' {...field}/>
                </FormControl>
                <FormMessage />
            </FormItem>

        )}  
/>

          <FormField
        
        name='newPassword'
        control={form.control}
        render={({field})=>(
            <FormItem className='mb-8 mt-2'>
                <FormLabel></FormLabel>
                <FormControl>
                    <Input type='password' placeholder='password' {...field}/>
                </FormControl>
                <FormMessage />
            </FormItem>

        )}  
/>
            <button className='rounded-[4px] cursor-pointer transition duration-300 bg-transparent my-3 px-2 py-2.5 border border-main2 text-main2 hover:bg-main2 hover:text-white'>reset password</button>
        </form>
        </Form>
        
        
    </div>
  )
}
