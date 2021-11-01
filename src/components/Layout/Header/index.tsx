import { NextPage } from 'next'
import * as C from './styled'

const Header: NextPage = function () {
  return (
    <>
      <C.Header>
        <h1>Cadastro de Desenvolvedor</h1>
        <p>Faça seu cadastro na lista e receba um emprego instantaneamente.</p>
      </C.Header>
    </>
  )
}

export default Header
