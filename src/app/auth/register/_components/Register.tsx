'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { RegisterSchema, RegisterSchemaForm } from '@/schemas/register.schema'
import addUser from '@/apis/register.api'


export default function Register() {

    const form = useForm<RegisterSchemaForm>({
        resolver:zodResolver(RegisterSchema),
        defaultValues:{
            name:'',
            email:'',
            password:'',
            rePassword:'',
            phone:''
        }
})

async function onSubmit(data:RegisterSchemaForm){
     addUser({user:data})
    
}
  return (
    <>
    
    <Form {...form}>

        <form className='my-35 container w-[80%]' onSubmit={form.handleSubmit(onSubmit)}>
        <h2 className='my-5 font-medium text-gray-800' >Register Now</h2>
        <FormField
        
        name='name'
        control={form.control}
        render={({field})=>(
            <FormItem className='my-8'>
                <FormLabel className='text-gray-900'>Name:</FormLabel>
                <FormControl>
                    <Input {...field}/>
                </FormControl>
                {form.formState.errors.name&&
                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <FormMessage/>
                </div>}
            </FormItem>

        )}  
/>
<FormField
        
        name='email'
        control={form.control}
        render={({field})=>(
            <FormItem className='my-8'>
                <FormLabel className='text-gray-900'>Email:</FormLabel>
                <FormControl>
                    <Input type='email' {...field}/>
                </FormControl>
                {form.formState.errors.email&&
                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <FormMessage/>
                </div>}
            </FormItem>

        )}  
/>
<FormField
        
        name='password'
        control={form.control}
        render={({field})=>(
            <FormItem className='my-8'>
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
<FormField
        
        name='rePassword'
        control={form.control}
        render={({field})=>(
            <FormItem className='my-8'>
                <FormLabel className='text-gray-900'>Re-password:</FormLabel>
                <FormControl>
                    <Input type='password' autoComplete='off' {...field}/>
                </FormControl>
                {form.formState.errors.rePassword&&
                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <FormMessage/>
                </div>}
            </FormItem>

        )}  
/>
<FormField
        
        name='phone'
        control={form.control}
        render={({field})=>(
            <FormItem className='my-8'>
                <FormLabel className='text-gray-900'>Phone:</FormLabel>
                <FormControl>
                    <Input type='phone' {...field}/>
                </FormControl>
                {form.formState.errors.phone&&
               <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <FormMessage/>
                </div>}
            </FormItem>

        )}  
/>
<Button className='bg-main text-white my-5 block ml-auto hover:bg-main cursor-pointer'>Register</Button>
        </form>
    </Form>
    </>
  )
}
