'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { LoginSchema, LoginSchemaForm } from '@/schemas/login.schema'
import { signIn } from 'next-auth/react'
import Link from 'next/link'


export default function Login() {

    const form = useForm<LoginSchemaForm>({
        resolver:zodResolver(LoginSchema),
        defaultValues:{
            
            email:'',
            password:'',
            
        }
})

async function onSubmit(data:LoginSchemaForm){
  const res=await signIn('credentials',{
        email:data.email,
        password:data.password,
        redirect:false
    })
    if(res?.ok){
        window.location.href='/'
    }

    
}
  return (
    <>
    
    <Form {...form}>

        <form className='my-35 container w-[80%]' onSubmit={form.handleSubmit(onSubmit)}>
     <h2 className='my-2 font-medium text-gray-800 text-3xl' >login now</h2>
<FormField
        
        name='email'
        control={form.control}
        render={({field})=>(
            <FormItem className='mb-8 mt-2'>
                <FormLabel className='text-gray-900'>Email:</FormLabel>
                <FormControl>
                    <Input type='email' {...field}/>
                </FormControl>
                {form.formState.errors.email&&
                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <FormMessage />
                 </div>}
            </FormItem>

        )}  
/>
<FormField
        
        name='password'
        control={form.control}
        render={({field})=>(
            <FormItem className='mt-8 mb-3'>
                <FormLabel className='text-gray-900'>Password:</FormLabel>
                <FormControl>
                    <Input type='password' autoComplete='off' {...field}/>
                </FormControl>
                {form.formState.errors.password&&
                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <FormMessage/>
                 </div>}
            </FormItem>

        )}  
/>

        
     <div className='flex justify-between items-center'>
            <Link href={'/forget-password'} className='cursor-pointer text-lg text-gray-800 hover:text-main transition duration-500 '>forget your password ?</Link >
            <button className='bg-transparent text-lg px-5 py-2 transition duration-500 rounded-[8px] border border-gray-400 text-gray-500 hover:bg-main hover:text-white hover:border-none cursor-pointer'>
                login now
            </button>
     </div>
        </form>
    </Form>
    </>
  )
}
