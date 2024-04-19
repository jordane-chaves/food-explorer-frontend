import { ReactNode, RefObject, createContext, useContext, useRef } from 'react'

interface DialogContextProps {
  contentRef: RefObject<HTMLDialogElement> | null
  onOpenToggle: () => void
}

const DialogContext = createContext<DialogContextProps>({
  contentRef: null,
  onOpenToggle: () => {},
})

export function useDialogContext() {
  const context = useContext(DialogContext)
  return context
}

interface DialogRootProps {
  children: ReactNode
}

export function DialogRoot({ children }: DialogRootProps) {
  const contentRef = useRef<HTMLDialogElement>(null)

  function handleOpenToggle() {
    const modal = contentRef.current

    if (!modal) {
      return
    }

    modal.open ? modal.close() : modal.showModal()
  }

  return (
    <DialogContext.Provider
      value={{
        contentRef,
        onOpenToggle: handleOpenToggle,
      }}
    >
      {children}
    </DialogContext.Provider>
  )
}
