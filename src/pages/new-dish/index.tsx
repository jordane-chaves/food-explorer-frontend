import { CaretLeft, Plus, UploadSimple, X } from '@phosphor-icons/react'
import { AxiosError } from 'axios'
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Category } from '@/@types/entities/category'
import { Button } from '@/components/button'
import { CreateNewCategoryDialog } from '@/components/create-new-category-dialog'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Ingredients } from '@/components/ingredients'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import { api } from '@/services/api'

import {
  Actions,
  Container,
  Content,
  FileSelectText,
  Form,
  InputsGroup,
  ReturnButton,
} from './styles'

interface CreateDishBody {
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

export function NewDish() {
  const [imageFile, setImageFile] = useState<File | undefined>()
  const [categoryId, setCategoryId] = useState<string | undefined>()
  const [name, setName] = useState<string | undefined>()
  const [description, setDescription] = useState<string | undefined>()
  const [price, setPrice] = useState<number | undefined>()
  const [ingredients, setIngredients] = useState<string[]>([])

  const [newIngredient, setNewIngredient] = useState<string | undefined>()
  const [categories, setCategories] = useState<Category[]>([])

  const [newCategoryDialogOpen, setNewCategoryDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const newIngredientInput = useRef<HTMLInputElement>(null)

  const navigate = useNavigate()

  async function uploadImage() {
    if (!imageFile) {
      throw new Error('Selecione uma imagem.')
    }

    const form = new FormData()
    form.append('file', imageFile)

    const response = await api.post<{ imageId: string }>('/dishes/image', form)

    return {
      imageId: response.data.imageId,
    }
  }

  async function createDish(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!categoryId || !name || !description || !price) {
      return alert('Preencha todos os campos.')
    }

    try {
      setIsLoading(true)
      const { imageId } = await uploadImage()

      await api.post<unknown, null, CreateDishBody>('/dishes', {
        categoryId,
        imageId,
        name,
        description,
        price,
        ingredients,
      })

      return navigate('/')
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return alert(error.response.data.message)
      } else {
        return alert('Erro ao criar o prato.')
      }
    } finally {
      setIsLoading(false)
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
    navigate(-1)
  }

  function handleChangePrice(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target

    const valueWithTwoDecimalPlaces = Number(value).toFixed(2)
    const convertedValue = Number(valueWithTwoDecimalPlaces)

    setPrice(convertedValue)
  }

  function handleAddIngredient() {
    if (!newIngredient) {
      return
    }

    setIngredients((prev) => [...prev, newIngredient])
    setNewIngredient('')

    newIngredientInput.current?.focus()
  }

  function handleRemoveIngredient(deletedIngredient: string) {
    setIngredients((prev) =>
      prev.filter((ingredient) => ingredient !== deletedIngredient),
    )

    newIngredientInput.current?.focus()
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

  useEffect(() => {
    listCategories()
  }, [])

  useEffect(() => {
    if (categories.length > 0) {
      setCategoryId(categories[0].id)
    }
  }, [categories])

  const categoriesSelectOptions = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }))

  const requiredFields = [categoryId, name, description, price, imageFile]
  const canCreateDish = !requiredFields.some((field) => !field)

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

        <Form onSubmit={createDish}>
          <h1>Novo prato</h1>

          <InputsGroup>
            <Input.Root label="Imagem do prato" className="image">
              <Input.Icon icon={UploadSimple} />

              <FileSelectText>
                {imageFile
                  ? 'Selecione imagem para alterá-la'
                  : 'Selecione imagem'}
              </FileSelectText>

              <Input.Element
                type="file"
                accept="image/*"
                hidden
                onChange={handleSelectImage}
                loading={isLoading}
              />
            </Input.Root>

            <Input.Root label="Nome" className="name" aria-disabled>
              <Input.Element
                placeholder="Ex.: Salada Ceasar"
                onChange={(event) => setName(event.target.value)}
                value={name ?? ''}
                loading={isLoading}
              />
            </Input.Root>

            <Select.Root className="categories">
              <Select.Label htmlFor="categorias">
                Categoria
                <Select.Button
                  icon={Plus}
                  text="Adicionar categoria"
                  onClick={() => setNewCategoryDialogOpen(true)}
                  loading={isLoading}
                />
              </Select.Label>

              <Select.Element
                id="categorias"
                emptyText="Adicione uma nova categoria..."
                options={categoriesSelectOptions}
                onChange={(event) => setCategoryId(event.target.value)}
                value={categoryId}
                loading={isLoading}
              />
            </Select.Root>
          </InputsGroup>

          <InputsGroup>
            <Ingredients.Root className="ingredients">
              <Ingredients.Label htmlFor="new-ingredient" text="Ingredientes" />

              <Ingredients.Items>
                {ingredients.map((ingredient, index) => (
                  <Ingredients.Item key={index}>
                    <Ingredients.ItemInput
                      readOnly
                      value={ingredient}
                      loading={isLoading}
                    />
                    <Ingredients.ItemAction
                      icon={X}
                      onClick={() => handleRemoveIngredient(ingredient)}
                      loading={isLoading}
                    />
                  </Ingredients.Item>
                ))}

                <Ingredients.Item isNew>
                  <Ingredients.ItemInput
                    id="new-ingredient"
                    ref={newIngredientInput}
                    value={newIngredient ?? ''}
                    onChange={(event) => setNewIngredient(event.target.value)}
                    placeholder="Adicionar"
                    loading={isLoading}
                  />

                  <Ingredients.ItemAction
                    icon={Plus}
                    onClick={handleAddIngredient}
                    loading={isLoading}
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
                loading={isLoading}
              />
            </Input.Root>
          </InputsGroup>

          <Input.Root label="Descrição">
            <Input.Element
              component="textarea"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(event) => setDescription(event.target.value)}
              value={description ?? ''}
              loading={isLoading}
            />
          </Input.Root>

          <Actions>
            <Button.Root
              disabled={!canCreateDish}
              type="submit"
              loading={isLoading}
            >
              <Button.Text text="Salvar alterações" />
            </Button.Root>
          </Actions>
        </Form>
      </Content>

      <Footer />
    </Container>
  )
}
