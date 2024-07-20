import React, { FC } from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, FieldPath, Form } from 'react-hook-form'
import { z } from 'zod';
import { authFormSchema } from '@/lib/utils';

const formScheme = authFormSchema('sign-up')

interface IParams {
  control: Control<z.infer<typeof formScheme>>
  name: FieldPath<z.infer<typeof formScheme>>
  placeholder: string
  label: string
  type: 'text' | 'email' | 'password' | 'number'
}

const CustomInput: FC<IParams> = ({ control, name, placeholder, label, type }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className='form-item'>
          <FormLabel className='form-label'>
            {label}
          </FormLabel>
          <div className='flex flex-col w-full'>
            <FormControl>
              <Input
                placeholder={placeholder}
                className='input-class'
                type={type}
                {...field}
              />
            </FormControl>
            <FormMessage className='form-message mt-2' />
          </div>
        </div>
      )}
    />
  )
}

export default CustomInput