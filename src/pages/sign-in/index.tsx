import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'

import LogoImg from '@/assets/logo.svg'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { useAuth } from '@/hooks/auth'

import { Container, Form, LogoWrapper } from './styles'

export function SignIn() {
  const [email, setEmail] = useState<string | undefined>()
  const [password, setPassword] = useState<string | undefined>()

  const { signIn } = useAuth()

  async function handleSignIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!signIn) {
      return alert('Falha ao criar a conta')
    }

    if (!email || !password) {
      return alert('Preencha o E-mail e a Senha')
    }

    await signIn({
      email,
      password,
    })
  }

  return (
    <Container>
      <LogoWrapper>
        <img src={LogoImg} alt="Food Explorer" />
      </LogoWrapper>

      <Form onSubmit={handleSignIn}>
        <h1>Crie sua conta</h1>

        <Input.Root
          label="Email"
          description='For admin use "admin@example.com"'
        >
          <Input.Element
            type="email"
            placeholder="Exemplo: johndoe@example.com"
            title="Digite um e-mail com formato válido"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Input.Root>

        <Input.Root label="Senha" description='For admin use "123456"'>
          <Input.Element
            type="password"
            placeholder="Digite sua senha"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </Input.Root>

        <Button.Root type="submit">
          <Button.Text text="Entrar" />
        </Button.Root>

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  )
}
