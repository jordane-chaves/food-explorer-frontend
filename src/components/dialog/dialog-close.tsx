import { X } from '@phosphor-icons/react'

import { useDialogContext } from './dialog-root'
import { Close } from './styles'

export function DialogClose() {
  const { onOpenToggle } = useDialogContext()

  return (
    <Close onClick={onOpenToggle}>
      <X />
    </Close>
  )
}
