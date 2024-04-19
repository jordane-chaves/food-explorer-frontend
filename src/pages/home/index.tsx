import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Category } from '@/@types/entities/category'
import { DishDetails } from '@/@types/entities/dish-details'
import EmptyImg from '@/assets/empty.svg'
import { DishCard } from '@/components/dish-card'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Section } from '@/components/section'
import { Slider } from '@/components/slider'
import { useAuth } from '@/hooks/auth'
import { api } from '@/services/api'
import { UserRoles } from '@/utils/user-roles.enum'

import { Container, Content, EmptyDishes, Hero, HeroContent } from './styles'

type CategoryWithDishesIds = Category & { dishes_ids: string[] }

export function Home() {
  const [search, setSearch] = useState('')
  const [categories, setCategories] = useState<CategoryWithDishesIds[]>([])
  const [dishes, setDishes] = useState<DishDetails[]>([])

  const { user } = useAuth()

  useEffect(() => {
    api
      .get<{ categories: CategoryWithDishesIds[] }>('/categories')
      .then((response) => response.data)
      .then((data) => setCategories(data.categories))
      .catch((error) => {
        if (error instanceof AxiosError && error.response) {
          return alert(error.response.data.message)
        } else {
          return alert('Erro ao listar as categorias')
        }
      })
  }, [])

  useEffect(() => {
    api
      .get<{ dishes: DishDetails[] }>('/dishes', {
        params: {
          query: search,
        },
      })
      .then((response) => response.data)
      .then((data) => setDishes(data.dishes))
      .catch((error) => {
        if (error instanceof AxiosError && error.response) {
          return alert(error.response.data.message)
        } else {
          return alert('Erro ao listar as categorias')
        }
      })
  }, [search])

  const isEmptyDishes = dishes.length === 0

  const userRole = user?.role ?? UserRoles.CUSTOMER
  const canCreateNewDish = [UserRoles.ADMIN].includes(userRole)

  const categoriesWithDishes = categories
    .map((category) => {
      const categoryDishes = dishes.filter(
        (dish) => dish.category_id === category.id,
      )

      return {
        ...category,
        dishes: categoryDishes,
      }
    })
    .filter((category) => category.dishes.length > 0)

  return (
    <Container>
      <Header onSearchChange={(event) => setSearch(event.target.value)} />

      <Content>
        <Hero>
          <HeroContent>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </HeroContent>
        </Hero>

        {isEmptyDishes ? (
          <EmptyDishes>
            <img
              src={EmptyImg}
              alt="Ilustração de um prato com ovos, batata frita e mais alguns ingredientes. Do lado esquerdo do prato contém um vidro de molho e do lado direito um copo contendo um líquido com gelo e um canudo."
            />

            <p>Nenhum prato cadastrado</p>

            {canCreateNewDish && (
              <div>
                <span>
                  Crie um <Link to="/dish/new">novo prato</Link>
                </span>
              </div>
            )}
          </EmptyDishes>
        ) : (
          categoriesWithDishes.map((category) => (
            <Section title={category.name} key={category.id}>
              <Slider
                slides={category.dishes.map((dish) => (
                  <DishCard key={dish.id} dish={dish} />
                ))}
              />
            </Section>
          ))
        )}
      </Content>

      <Footer />
    </Container>
  )
}
