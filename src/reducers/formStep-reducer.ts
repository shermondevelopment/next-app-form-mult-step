type initialState = {
  currentStep: number
  name: string
  email: string
  gitHub: string
  level: 0
}

export enum Type {
  setCurrentStep,
  setName,
  setEmail,
  setGitHub,
  setLevel
}

export interface FormContext {
  state: initialState
  dispatch: (actionProps: ActionProps) => void
}

export interface ActionProps {
  type: Type
  payload: any
}

const reducerForm = (state: initialState, action: ActionProps) => {
  switch (action.type) {
    case Type.setName:
      return { ...state, name: action.payload.name }
      break
    case Type.setEmail:
      return { ...state, email: action.payload.email }
      break
    case Type.setGitHub:
      return { ...state, gitHub: action.payload.gitHub }
      break
    case Type.setLevel:
      return { ...state, level: action.payload.level }
      break
    case Type.setCurrentStep:
      return { ...state, currentStep: action.payload.currentStep }
  }
}

export default reducerForm
