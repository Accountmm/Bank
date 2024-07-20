'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/Components/ui/button"
import { Form, } from "@/Components/ui/form"
import CustomInput from './CustomInput'
import { authFormSchema } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { signIn, signUp } from '@/lib/actions/user.actions'



const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter()

  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const formSchema = authFormSchema(type)

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
    mode: 'onChange',

  })

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true)
    try {
      if (type === 'sign-up') {
        const newUser = await signUp(data)

        setUser(newUser)
      }

      if (type === 'sign-in') {
        const response = await signIn({ email: data.email, password: data.password })
        if (response) {
          router.push('/')
        }
      }
    } catch (error) {
      console.warn(error);
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <section className='auth-form'>
      <header className='flex flex-col gap-5 md:gap-8'>
        <Link href={'/'} className='flex  cursor-pointer items-center gap-1'>
          <Image
            src={'/icons/logo.svg'}
            alt='logo'
            width={34}
            height={34}
          />
          <h1 className='sidebar-logo font-ibm-plex-serif font-bold text-black-1'>Horizon</h1>
        </Link>

        <div className='flex flex-col gap-1 md:gap-3 '>
          <h1 className='text-26 lg:text-36 font-semibold text-gray-900'>
            {
              user
                ? 'Link to account'
                : type === 'sign-up'
                  ? 'Sign up'
                  : 'Sign in '
            }
          </h1>
          <p className='text-16 font-normal text-gray-600'>
            {
              user
                ? 'Welcome back! Please enter your details.'
                : 'Please enter your details.'
            }
          </p>
        </div>
      </header>
      {
        user
          ? (
            <div className='flex flex-col gap-4'>
              {/* PladiLink */}
            </div>
          )
          : (
            <>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                  {
                    type === 'sign-up' && (
                      <>
                        <div className='flex gap-4'>
                          <CustomInput control={form.control} name={'firstName'} label={'First Name'} placeholder={'Example: John'} type='text' />
                          <CustomInput control={form.control} name={'lastName'} label={'Last Name'} placeholder={'Example: Wick'} type='text' />
                        </div>

                        <CustomInput control={form.control} name={'address1'} label={'Address'} placeholder={'Enter your specific address'} type='text' />
                        <CustomInput control={form.control} name={'city'} label={'City'} placeholder={'Enter your city'} type='text' />

                        <div className='flex gap-4'>
                          <CustomInput control={form.control} name={'state'} label={'State'} placeholder={'Example: NY'} type='text' />
                          <CustomInput control={form.control} name={'postalCode'} label={'Postal Code'} placeholder={'Example: 11011'} type='number' />
                        </div>

                        <div className='flex gap-4'>
                          <CustomInput control={form.control} name={'dataOfBirth'} label={'Date of Birth'} placeholder={'yyyy-mm-dd'} type='text' />
                          <CustomInput control={form.control} name={'ssn'} label={'SSN'} placeholder={'Example: 1234'} type='number' />
                        </div>


                      </>
                    )
                  }
                  < CustomInput control={form.control} name={'email'} label={'Email'} placeholder={'Enter your email'} type='email' />
                  <CustomInput control={form.control} name={'password'} label={'Password'} placeholder={'Enter your password'} type='password' />

                  <div className='flex flex-col gap-4'>
                    <Button type="submit" className='form-btn' disabled={isLoading}>
                      {
                        isLoading
                          ?
                          < >
                            <Loader2 size={20} className='animate-spin' />
                            &nbsp;
                            Loading
                          </>
                          : type === 'sign-in'
                            ? 'Sign In' : 'Sign Up'
                      }
                    </Button>
                  </div>
                </form>
              </Form>

              <footer className='flex justify-center gap-1'>
                <p className='text-14 font-normal text-gray-600'>
                  {
                    type === 'sign-in'
                      ? "Don't have an account?"
                      : "Already have an account?"
                  }
                </p>
                <Link href={type === 'sign-in' ? "/sign-up" : "/sign-in"} className='form-link'>
                  {
                    type === 'sign-in'
                      ? "Sign Up"
                      : "Sign In"
                  }
                </Link>
              </footer>
            </>
          )

      }
    </section>
  )
}

export default AuthForm