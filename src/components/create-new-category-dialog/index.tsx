import { Check } from '@phosphor-icons/react'
import { AxiosError } from 'axios'
import { FormEvent, useState } from 'react'

import { Category } from '@/@types/entities/category'
import { api } from '@/services/api'

import { Button } from '../button'
import { Input } from '../input'
import { Actions, Container, Content, Form, Header, Overlay } from './styles'

interface CreateNewCategoryDialogProps {
  dialogIdOpen?: boolean
  onCloseDialog: () => void
  onCategoryCreated?: (category: Category) => void
}

export function CreateNewCategoryDialog({
  dialogIdOpen,
  onCategoryCreated,
  onCloseDialog,
}: CreateNewCategoryDialogProps) {
  const [name, setName] = useState<string | undefined>('')
  const [isLoading, setIsLoading] = useState(false)

  async function createCategory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      setIsLoading(true)

      const response = await api.post<{ category: Category }>('/categories', {
        name,
      })

      if (typeof onCategoryCreated === 'function') {
        onCategoryCreated(response.data.category)
      }

      return handleCloseDialog()
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return alert(error.response.data.message)
      } else {
        return alert('Falha ao criar a categoria.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  function handleCloseDialog() {
    setName('')
    onCloseDialog()
  }

  function handleKeyDown(event: KeyboardEvent) {
    const actions: Record<string, () => void> = {
      Escape: handleCloseDialog,
    }

    const keyPressed = event.key
    const actionFunction = actions[keyPressed]

    if (typeof actionFunction === 'function') {
      return actionFunction()
    }
  }

  if (dialogIdOpen) {
    document.addEventListener('keydown', handleKeyDown)
  }

  return (
    <Container data-dialog-is-open={dialogIdOpen}>
      <Overlay onClick={handleCloseDialog} />

      <Content>
        <Header>
          <h1>Nova categoria</h1>
          <p>Categorias são utilizadas para agrupar os pratos.</p>
        </Header>

        <Form onSubmit={createCategory}>
          <Input.Root label="Nome">
            <Input.Element
              disabled={isLoading}
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Input.Root>

          <Actions>
            <Button.Root
              variant="secondary"
              onClick={handleCloseDialog}
              loading={isLoading}
            >
              <Button.Text text="Cancelar" />
            </Button.Root>

            <Button.Root type="submit" loading={isLoading}>
              <Button.Icon icon={Check} />
              <Button.Text text="Salvar" />
            </Button.Root>
          </Actions>
        </Form>
      </Content>
    </Container>
  )
}
