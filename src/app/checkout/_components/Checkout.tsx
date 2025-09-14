'use client'
import { Checkout } from '@/apis/CheckOut'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { checkSchema, checkSchemaForm } from '@/schemas/checkout.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function CheckOut({cartId}:{cartId:string}) {
    const form = useForm<checkSchemaForm>({
            resolver:zodResolver(checkSchema),
            defaultValues:{
                details:'',
                city:'',
                phone:''
            }
    })
   async function OnSubmit(data:checkSchemaForm){
        const res = await Checkout(cartId,data)
        if(res.status==='success')
         window.location.href=res?.session?.url
    }
  return (
    <Form {...form}>
        <form className='w-[80%] mx-auto my-30' onSubmit={form.handleSubmit(OnSubmit)}>

             <FormField
          control={form.control}
          name="details"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Details</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>
              {form.formState.errors.details&&
                              <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                  <FormMessage/>
                              </div>}
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className='my-3'>
              <FormLabel>city</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>
              {form.formState.errors.city&&
                              <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                  <FormMessage/>
                              </div>}
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>phone</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>
             {form.formState.errors.phone&&
                             <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                 <FormMessage/>
                             </div>}
            </FormItem>
          )}
        />
        <button className='w-full my-5 rounded-[8px] transition duration-300 cursor-pointer border py-2 border-blue-400 text-blue-400 bg-transparent hover:bg-blue-400 hover:text-black'>pay now</button>
        </form>
    </Form>
  )
}
