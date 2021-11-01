import { NextPage } from 'next'
import Link from 'next/link'
import Theme from '../Layout/Theme'
import { useRouter } from 'next/router'
import * as C from './styled'
import { useEffect } from 'react'
import { FormValues } from '../../contexts/formContext'
import { Type } from '../../reducers/formStep-reducer'
import SelectionOption from '../SelectionOption'

const FormSecondStep: NextPage = function () {
  const { state, dispatch } = FormValues()
  const router = useRouter()

  const handleNext = () => {
    if (state.name !== '') {
      router.push('/step3', undefined, { shallow: true })
    } else {
      alert('Preencha os dados')
    }
  }

  useEffect(() => {
    if (state.name === '') {
      router.push('/', undefined, { shallow: true })
    } else {
      dispatch({ type: Type.setCurrentStep, payload: { currentStep: 2 } })
    }
  }, [])

  const setLevel = (select: number) => {
    dispatch({ type: Type.setLevel, payload: { level: select } })
  }

  return (
    <Theme>
      <C.Container>
        <small>Passo {state.currentStep}/3</small>
        <br />
        <br />
        <h3>{state.name} o que melhor descreve você?</h3>
        <br />
        <p>
          Escolha a melhor opção que condiz com seu estado atual,
          profissionalmente.
        </p>
        <br />
        <br />
        <hr />
        <br />
        <SelectionOption
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="🎃"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />
        <SelectionOption
          title="Sou programador"
          description="Comecei a programar há menos de 4 anos"
          icon="🎃"
          selected={!!state.level}
          onClick={() => setLevel(1)}
        />
        <Link href="/">Voltar</Link>
        <button onClick={handleNext}>Próximo</button>
      </C.Container>
    </Theme>
  )
}

export default FormSecondStep
