import React, { ReactNode } from 'react'

import { useDialogContext } from './dialog-root'

interface DialogTriggerProps {
  children: ReactNode
}

export function DialogTrigger({ children }: DialogTriggerProps) {
  const { onOpenToggle } = useDialogContext()

  if (!React.isValidElement(children)) {
    return null
  }

  return React.cloneElement(children, {
    ...children.props,
    onClick: onOpenToggle,
    style: {
      ...children.props.style,
      cursor: 'pointer',
    },
  })
}
