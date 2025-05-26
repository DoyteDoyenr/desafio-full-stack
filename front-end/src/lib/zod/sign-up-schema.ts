import { z } from 'zod'

const SignUpSchema = z.object({
  email: z
    .string({ required_error: 'Email inválido' })
    .email({ message: 'Email inválido' }),
  password: z
    .string({ required_error: 'Senha deve ter pelo menos 6 caracteres' })
    .min(6, { message: 'Senha deve ter pelo menos 6 caracteres' }),
})

type SignUpFormType = z.infer<typeof SignUpSchema>

export { type SignUpFormType, SignUpSchema }
