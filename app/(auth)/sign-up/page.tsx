import AuthForm from '@/Components/AuthForm'
import React from 'react'

const SignUp = async () => {
  return (
    <section className='flex-center size-full max-sm:px6'>
      <AuthForm type='sign-up' />
    </section>
  )
}

export default SignUp