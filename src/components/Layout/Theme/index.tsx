import { ReactNode } from 'react'
import SideBarItem from '../../SideBarItem'
import Header from '../Header'
import * as C from './styled'
import { FormValues } from '../../../contexts/formContext'

type Props = {
  children: ReactNode
}

const Theme = function ({ children }: Props) {
  const { state } = FormValues()

  return (
    <C.Container>
      <C.Area>
        <Header />

        <C.Steps>
          <C.SideBar>
            <SideBarItem
              title="Pessoal"
              description="Se identifique"
              icon="profile"
              path="/"
              active={state.currentStep === 1}
            />
            <SideBarItem
              title="Profissional"
              description="Seu nível"
              icon="book"
              path="/step2"
              active={state.currentStep === 2}
            />
            <SideBarItem
              title="Contatos"
              description="Como te achar"
              icon="contato"
              path="/step3"
              active={state.currentStep === 3}
            />
          </C.SideBar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  )
}

export default Theme
