import { createContext, useContext, useReducer } from 'react'
import reducerForm, { FormContext } from '../reducers/formStep-reducer'

const ContentForm = createContext<FormContext | undefined>(undefined)

const initialState = {
  currentStep: 0,
  name: '',
  email: '',
  gitHub: '',
  level: 0
}

export const FormContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducerForm, initialState)

  return (
    <ContentForm.Provider value={{ state, dispatch }}>
      {children}
    </ContentForm.Provider>
  )
}

export const FormValues = () => {
  const context = useContext(ContentForm)
  if (context === undefined) {
    throw new Error('erro')
  }
  return context
}
