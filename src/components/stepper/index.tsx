import { MouseEvent, useEffect, useState } from 'react'

import { Minus, Plus } from '@phosphor-icons/react'

import { ActionButton, Container } from './styles'

interface StepperProps {
  max?: number
  min?: number
  onCountChange?: (value: number) => void
}

export function Stepper({ min = 1, max, onCountChange }: StepperProps) {
  const [count, setCount] = useState(1)

  function handleIncrement(event: MouseEvent<HTMLElement>) {
    event.stopPropagation()

    if (max && count >= max) {
      setCount(max)
      return
    }

    setCount((prev) => prev + 1)
  }

  function handleDecrement(event: MouseEvent<HTMLElement>) {
    event.stopPropagation()

    if (count <= min) {
      setCount(min)
      return
    }

    setCount((prev) => prev - 1)
  }

  useEffect(() => {
    if (typeof onCountChange === 'function') {
      onCountChange(count)
    }
  }, [count, onCountChange])

  const countText = count.toString().padStart(2, '0')

  return (
    <Container>
      <ActionButton onClick={handleDecrement}>
        <Minus />
      </ActionButton>

      <span>{countText}</span>

      <ActionButton onClick={handleIncrement}>
        <Plus />
      </ActionButton>
    </Container>
  )
}
