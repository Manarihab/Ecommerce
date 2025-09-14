'use client'
import Forgot from '@/apis/Forgot'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { forgotSchema, forgotSchemaForm } from '@/schemas/forgot.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function Forget() {
    const form = useForm<forgotSchemaForm>({
        resolver:zodResolver(forgotSchema),
        defaultValues:{
            email:''
        }
    })

async function OnSubmit(data:forgotSchemaForm){
    const email = data.email
    const res =await Forgot({email})
    
    if(res.statusMsg==='success'){
       window.location.href='/verify-code'
}

}
  return (
    <div>
        <Form {...form}>
            <form className='w-[90%] mx-auto my-30' onSubmit={form.handleSubmit(OnSubmit)}>
            <h2 className='text-gray-800 font-medium text-3xl'>please enter your verification code</h2>
            <FormField
        
        name='email'
        control={form.control}
        render={({field})=>(
            <FormItem className='mb-8 mt-2'>
                <FormLabel></FormLabel>
                <FormControl>
                    <Input type='email' placeholder='Email' {...field}/>
                </FormControl>
                <FormMessage />
            </FormItem>

        )}  
/>
            <button className='rounded-[4px] cursor-pointer bg-transparent my-3 px-2 py-2.5 border border-main2 text-main2 hover:bg-main2 hover:text-white'>verify</button>
        </form>
        </Form>
        
        
    </div>
  )
}
