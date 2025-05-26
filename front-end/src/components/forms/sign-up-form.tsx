'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { createAccount } from '@/actions/create-account.action'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SignUpFormType, SignUpSchema } from '@/lib/zod/sign-up-schema'

import { MessageError } from '../message-error'

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormType>({
    resolver: zodResolver(SignUpSchema),
  })

  const navigate = useRouter()

  const onSubmit = async (data: SignUpFormType) => {
    const { status } = await createAccount(data)

    if (status !== 201) {
      switch (status) {
        case 409:
          toast.error('Este e-mail já está em uso. Tente outro.')
          break
        case 500:
        default:
          toast.error('Erro inesperado ao fazer login')
      }
      return
    }

    toast.success('Conta criada com sucesso!')

    navigate.push('/sign-in')
  }

  return (
    <form
      className='flex flex-col gap-6'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex flex-col items-center gap-2 text-center'>
        <h1 className='text-2xl font-bold'>Crie sua conta</h1>
        <p className='text-muted-foreground text-sm text-balance'>
          Insira seu email abaixo para criar uma conta
        </p>
      </div>
      <div className='grid gap-6'>
        <div className='grid gap-3'>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            placeholder='m@exemplo.com'
            {...register('email')}
          />
          {errors.email && <MessageError message={errors.email.message} />}
        </div>
        <div className='grid gap-3'>
          <Label htmlFor='password'>Senha</Label>
          <Input
            id='password'
            type='password'
            placeholder='Digite sua senha'
            {...register('password')}
          />
          {errors.password && (
            <MessageError message={errors.password.message} />
          )}
        </div>
        <Button
          type='submit'
          className='w-full'
        >
          Criar Conta
        </Button>
      </div>
      <div className='text-center text-sm'>
        Já tem uma conta?{' '}
        <Link
          href='./sign-in'
          className='underline underline-offset-4'
        >
          Faça login
        </Link>
      </div>
    </form>
  )
}
