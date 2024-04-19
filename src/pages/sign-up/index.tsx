import { AxiosError } from 'axios'
import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import LogoImg from '@/assets/logo.svg'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { useAuth } from '@/hooks/auth'
import { api } from '@/services/api'

import { Container, Form, LogoWrapper, PasswordStrengthMessage } from './styles'

interface CreateAccountBody {
  name: string
  email: string
  password: string
}

type CreateAccountResponse = null | AxiosError<{
  statusCode: number
  message: string
}>

export function SignUp() {
  const [name, setName] = useState<string | undefined>()
  const [email, setEmail] = useState<string | undefined>()
  const [password, setPassword] = useState<string | undefined>()

  const navigate = useNavigate()
  const { signIn } = useAuth()

  const isPasswordStrong =
    !!password &&
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(
      password,
    )

  async function handleCreateAccount(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!signIn) {
      return alert('Falha ao criar a conta')
    }

    if (!name || !email || !password) {
      return alert('Preencha todos os campos')
    }

    try {
      const response = await api.post<
        unknown,
        CreateAccountResponse,
        CreateAccountBody
      >('/register', {
        name,
        email,
        password,
      })

      if (response instanceof AxiosError) {
        throw response
      }

      await signIn({ email, password })

      return navigate('/')
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return alert(error.response.data.message)
      } else {
        return alert('Erro ao se cadastrar.')
      }
    }
  }

  const canCreateAccount = !!name && !!email && isPasswordStrong

  return (
    <Container>
      <LogoWrapper>
        <img src={LogoImg} alt="Food Explorer" />
      </LogoWrapper>

      <Form onSubmit={handleCreateAccount}>
        <h1>Crie sua conta</h1>

        <Input.Root label="Seu nome">
          <Input.Element
            type="text"
            placeholder="Exemplo: John Doe"
            onChange={(event) => setName(event.target.value)}
            required
          />
        </Input.Root>

        <Input.Root label="Email">
          <Input.Element
            type="email"
            placeholder="Exemplo: johndoe@examplo.com"
            title="Digite um e-mail com formato válido"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Input.Root>

        <div>
          <Input.Root label="Senha">
            <Input.Element
              type="password"
              placeholder="No mínimo 6 caracteres"
              minLength={6}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </Input.Root>

          {password && (
            <PasswordStrengthMessage data-is-strong={isPasswordStrong}>
              {isPasswordStrong ? 'Senha forte' : 'Senha fraca'}
            </PasswordStrengthMessage>
          )}
        </div>

        <Button.Root type="submit" disabled={!canCreateAccount}>
          <Button.Text text="Criar conta" />
        </Button.Root>

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  )
}
