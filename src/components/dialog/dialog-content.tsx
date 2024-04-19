import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

import { useDialogContext } from './dialog-root'
import { Content } from './styles'

interface DialogContentProps {
  children: ReactNode
}

export function DialogContent({ children }: DialogContentProps) {
  const { contentRef } = useDialogContext()

  return (
    <>
      {createPortal(
        <Content ref={contentRef}>{children}</Content>,
        document.body,
      )}
    </>
  )
}
