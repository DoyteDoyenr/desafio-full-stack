import React from 'react'

interface MessageErrorProps {
  message?: string
}

export function MessageError({ message }: MessageErrorProps) {
  return (
    <p
      role='alert'
      aria-live='assertive'
      className='text-xs text-red-500'
    >
      {message}
    </p>
  )
}
