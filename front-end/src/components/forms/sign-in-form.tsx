'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Authenticate } from '@/actions/authenticate.action'
import { MessageError } from '@/components/message-error'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SignInFormType, SignInSchema } from '@/lib/zod/sign-in-schema'

export function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormType>({
    resolver: zodResolver(SignInSchema),
  })

  const navigate = useRouter()

  const onSubmit = async (data: SignInFormType) => {
    const { status } = await Authenticate(data)

    if (status !== 200) {
      switch (status) {
        case 401:
          toast.error('Credenciais inválidas')
          break
        case 409:
          toast.error('Usuário já está logado em outro dispositivo')
          break
        case 500:
        default:
          toast.error('Erro inesperado ao fazer login')
      }
      return
    }

    toast.success('Login realizado com sucesso!')
    navigate.push('/')
  }

  return (
    <form
      className='flex flex-col gap-6'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex flex-col items-center gap-2 text-center'>
        <h1 className='text-2xl font-bold'>Faça seu login</h1>
        <p className='text-muted-foreground text-sm text-balance'>
          Insira seu email e senha abaixo para acessar sua conta
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
          Entrar
        </Button>
      </div>
      <div className='text-center text-sm'>
        Não tem uma conta?{' '}
        <Link
          href='./sign-up'
          className='underline underline-offset-4'
        >
          Cadastre-se
        </Link>
      </div>
    </form>
  )
}
