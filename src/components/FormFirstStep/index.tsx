import { NextPage } from 'next'
import { useRouter } from 'next/router'
import * as C from './styled'
import Theme from '../Layout/Theme'
import { ChangeEvent, useEffect } from 'react'
import { FormValues } from '../../contexts/formContext'
import { Type } from '../../reducers/formStep-reducer'

const FormFirstStep: NextPage = function () {
  const router = useRouter()
  const { state, dispatch } = FormValues()

  const handleNext = () => {
    if (state.name !== '') {
      router.push('/step2', undefined, { shallow: true })
    } else {
      alert('Preencha os dados')
    }
  }
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: Type.setName, payload: { name: e.currentTarget.value } })
  }

  useEffect(() => {
    dispatch({ type: Type.setCurrentStep, payload: { currentStep: 1 } })
  }, [])

  return (
    <Theme>
      <C.Container>
        <small>Passo {state.currentStep}/3</small>
        <br />
        <br />
        <h3>Vamos começar com seu nome</h3>
        <br />
        <p>Preencha o campo abaixo com seu nome completo.</p>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <label htmlFor="nome">
          Seu nome completo <br />
        </label>
        <input
          type="text"
          name="nome"
          autoFocus
          id="nome"
          value={state.name}
          onChange={handleNameChange}
        />
        <br />
        <button onClick={handleNext}>Próximo</button>
      </C.Container>
    </Theme>
  )
}

export default FormFirstStep
