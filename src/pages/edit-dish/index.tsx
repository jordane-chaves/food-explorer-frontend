import { AxiosError } from 'axios'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Category } from '@/@types/entities/category'
import { DishDetails } from '@/@types/entities/dish-details'
import { Button } from '@/components/button'
import { CreateNewCategoryDialog } from '@/components/create-new-category-dialog'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Ingredients } from '@/components/ingredients'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import { api } from '@/services/api'
import { CaretLeft, Plus, UploadSimple, X } from '@phosphor-icons/react'

import {
  Actions,
  Container,
  Content,
  FileSelectText,
  Form,
  InputsGroup,
  ReturnButton,
} from './styles'

interface EditDishBody {
  categoryId: string
  imageId: string
  name: string
  description: string
  price: number
  ingredients: string[]
}

interface ListCategoriesResponse {
  categories: Category[]
}

export function EditDish() {
  const [imageId, setImageId] = useState<string | undefined>('')
  const [imageUrl, setImageUrl] = useState<string | undefined>('')
  const [name, setName] = useState<string | undefined>('')
  const [categoryId, setCategoryId] = useState<string | undefined>('')
  const [description, setDescription] = useState<string | undefined>('')
  const [price, setPrice] = useState<number | undefined>()
  const [ingredients, setIngredients] = useState<string[]>([])

  const [imageFile, setImageFile] = useState<File | undefined>()
  const [newIngredient, setNewIngredient] = useState<string | undefined>()
  const [categories, setCategories] = useState<Category[]>([])
  const [newCategoryDialogOpen, setNewCategoryDialogOpen] = useState(false)

  const navigate = useNavigate()
  const params = useParams()
  const dishId = params.id

  async function uploadImage() {
    if (!imageFile) {
      return null
    }

    const form = new FormData()
    form.append('file', imageFile)

    const response = await api.post<{ imageId: string }>('/dishes/image', form)

    return {
      imageId: response.data.imageId,
    }
  }

  async function editDish(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!categoryId || !imageId || !name || !description || !price) {
      return alert('Preencha todos os campos.')
    }

    try {
      const response = await uploadImage()

      await api.put<unknown, null, EditDishBody>(`/dishes/${dishId}`, {
        categoryId,
        imageId: response?.imageId ?? imageId,
        name,
        description,
        price,
        ingredients,
      })

      return navigate(`/dishes/${dishId}`)
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return alert(error.response.data.message)
      } else {
        return alert('Erro ao editar o prato.')
      }
    }
  }

  async function deleteDish() {
    const shouldDeleteDish = confirm('Deseja realmente apagar o prato?')

    if (!shouldDeleteDish) {
      return null
    }

    try {
      await api.delete(`/dishes/${dishId}`)

      return navigate(`/`)
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return alert(error.response.data.message)
      } else {
        return alert('Erro ao apagar o prato.')
      }
    }
  }

  async function listCategories() {
    try {
      const response = await api.get<ListCategoriesResponse>('/categories')
      setCategories(response.data.categories)
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return alert(error.response.data.message)
      } else {
        return alert('Erro ao carregar as categorias')
      }
    }
  }

  function handleBack() {
    return navigate(-1)
  }

  function handleAddIngredient() {
    if (!newIngredient) {
      return
    }

    setIngredients((prev) => [...prev, newIngredient])
    setNewIngredient('')
  }

  function handleRemoveIngredient(deletedIngredient: string) {
    setIngredients((prev) =>
      prev.filter((ingredient) => ingredient !== deletedIngredient),
    )
  }

  function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files || files.length <= 0) {
      return
    }

    const file = files[0]

    setImageFile(file)
  }

  function handleCategoryCreated(category: { id: string; name: string }) {
    setCategories((prev) => [...prev, category])
  }

  function handleChangePrice(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target

    const valueWithTwoDecimalPlaces = Number(value).toFixed(2)
    const convertedValue = Number(valueWithTwoDecimalPlaces)

    setPrice(convertedValue)
  }

  useEffect(() => {
    async function getDish() {
      try {
        const response = await api.get<{ dish: DishDetails }>(
          `/dishes/${dishId}`,
        )

        const { dish } = response.data

        setImageId(dish.image_id)
        setImageUrl(dish.image_url)
        setName(dish.name)
        setCategoryId(dish.category_id)
        setPrice(dish.price)
        setDescription(dish.description)

        const dishIngredients = dish.ingredients.map(
          (ingredient) => ingredient.name,
        )

        setIngredients(dishIngredients)
      } catch (error) {
        if (error instanceof AxiosError && error.response) {
          return alert(error.response.data.message)
        } else {
          return alert('Falha ao buscar os dados do produto')
        }
      }
    }

    if (categories.length === 0) {
      listCategories()
    }

    getDish()
  }, [dishId, categories])

  const categoriesSelectOptions = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }))

  const requiredFields = [categoryId, imageId, name, description, price]
  const canEditDish = !requiredFields.some((field) => !field)

  return (
    <Container>
      <Header />
      <CreateNewCategoryDialog
        dialogIdOpen={newCategoryDialogOpen}
        onCategoryCreated={handleCategoryCreated}
        onCloseDialog={() => setNewCategoryDialogOpen(false)}
      />

      <Content>
        <ReturnButton onClick={handleBack}>
          <CaretLeft />
          voltar
        </ReturnButton>

        <Form onSubmit={editDish}>
          <h1>Editar prato</h1>

          <InputsGroup>
            <Input.Root label="Imagem do prato" className="image">
              <Input.Icon icon={UploadSimple} />
              <Input.Element
                type="file"
                accept="image/*"
                hidden
                onChange={handleSelectImage}
              />

              <FileSelectText>
                {imageFile || imageUrl
                  ? 'Selecione imagem para alterá-la'
                  : 'Selecione imagem'}
              </FileSelectText>
            </Input.Root>

            <Input.Root label="Nome" className="name">
              <Input.Element
                placeholder="Ex.: Salada Ceasar"
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
            </Input.Root>

            <Select.Root className="categories">
              <Select.Label htmlFor="categorias">
                Categoria
                <Select.Button
                  icon={Plus}
                  text="Adicionar categoria"
                  onClick={() => setNewCategoryDialogOpen(true)}
                />
              </Select.Label>

              <Select.Element
                id="categorias"
                emptyText="Adicione uma nova categoria..."
                options={categoriesSelectOptions}
                onChange={(event) => setCategoryId(event.target.value)}
                value={categoryId}
              />
            </Select.Root>
          </InputsGroup>

          <InputsGroup>
            <Ingredients.Root className="ingredients">
              <Ingredients.Label htmlFor="new-ingredient" text="Ingredientes" />

              <Ingredients.Items>
                {ingredients.map((ingredient, index) => (
                  <Ingredients.Item key={index}>
                    <Ingredients.ItemInput readOnly value={ingredient} />
                    <Ingredients.ItemAction
                      icon={X}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  </Ingredients.Item>
                ))}

                <Ingredients.Item isNew>
                  <Ingredients.ItemInput
                    id="new-ingredient"
                    value={newIngredient}
                    onChange={(event) => setNewIngredient(event.target.value)}
                    placeholder="Adicionar"
                  />

                  <Ingredients.ItemAction
                    icon={Plus}
                    onClick={handleAddIngredient}
                  />
                </Ingredients.Item>
              </Ingredients.Items>
            </Ingredients.Root>

            <Input.Root label="Preço" className="price">
              <span>R$</span>
              <Input.Element
                type="number"
                placeholder="00,00"
                onChange={handleChangePrice}
                value={price ?? ''}
                step="0.01"
              />
            </Input.Root>
          </InputsGroup>

          <Input.Root label="Descrição">
            <Input.Element
              component="textarea"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(event) => setDescription(event.target.value)}
              value={description}
            />
          </Input.Root>

          <Actions>
            <Button.Root variant="secondary" onClick={deleteDish}>
              <Button.Text text="Excluir prato" />
            </Button.Root>

            <Button.Root type="submit" disabled={!canEditDish}>
              <Button.Text text="Salvar alterações" />
            </Button.Root>
          </Actions>
        </Form>
      </Content>

      <Footer />
    </Container>
  )
}
