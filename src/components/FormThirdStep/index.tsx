import { NextPage } from 'next'
import Link from 'next/link'
import Theme from '../Layout/Theme'
import { useRouter } from 'next/router'
import * as C from './styled'
import { ChangeEvent, useEffect } from 'react'
import { FormValues } from '../../contexts/formContext'
import { Type } from '../../reducers/formStep-reducer'

const FormThirdStep: NextPage = function () {
  const { state, dispatch } = FormValues()
  const router = useRouter()

  const handleNext = () => {
    if (state.email !== '' && state.gitHub !== '') {
      console.log(state)
    } else {
      alert('Preencha os dados')
    }
  }

  useEffect(() => {
    if (state.name === '') {
      router.push('/', undefined, { shallow: true })
    } else {
      dispatch({ type: Type.setCurrentStep, payload: { currentStep: 3 } })
    }
  }, [])

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: Type.setEmail, payload: { email: e.currentTarget.value } })
  }

  const handleGitHubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: Type.setEmail, payload: { email: e.currentTarget.value } })
  }

  return (
    <Theme>
      <C.Container>
        <small>Passo {state.currentStep}/3</small>
        <br />
        <br />
        <h3>Legal {state.name}, onde te encontramos?</h3>
        <br />
        <p>Preencha com seus dados para entramos em contato</p>
        <br />
        <br />
        <hr />
        <br />
        <label htmlFor="nome">Qual seu e-mail</label>
        <input
          type="email"
          name="nome"
          id="nome"
          value={state.email}
          onChange={handleEmailChange}
        />
        <br />
        <label htmlFor="nome">Qual seu GitHub</label>
        <input
          type="url"
          name="nome"
          id="nome"
          value={state.gitHub}
          onChange={handleGitHubChange}
        />
        <br />
        <Link href="/step2">Voltar</Link>
        <button onClick={handleNext}>Finalizar Cadastro</button>
      </C.Container>
    </Theme>
  )
}

export default FormThirdStep
