'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Welcome() {
  return (
    <motion.div
      className='flex min-h-screen flex-col items-center justify-center p-4 text-center'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className='text-4xl font-bold tracking-tight sm:text-6xl'>
        Bem-vindo à nossa Loja
      </h1>
      <p className='text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-8'>
        Descubra nossa coleção selecionada de produtos premium projetados para
        melhorar seu estilo de vida.
      </p>
      <div className='mt-10 flex items-center justify-center gap-x-6'>
        <Link
          href='#showcase'
          className='bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-primary rounded-md px-6 py-3 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-offset-2'
        >
          Ver Mostruário
        </Link>
      </div>
    </motion.div>
  )
}
