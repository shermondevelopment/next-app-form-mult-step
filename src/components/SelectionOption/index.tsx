import * as C from './styled'

type SelectionOptionProps = {
  title: string
  description: string
  icon: string
  selected: boolean
  onClick: () => void
}

const SelectionOption: React.FC<SelectionOptionProps> = ({
  title,
  description,
  icon,
  selected,
  onClick
}) => {
  return (
    <C.Container selected={selected} onClick={onClick}>
      <C.Icon>{icon}</C.Icon>
      <C.Info>
        <C.Title>{title}</C.Title>
        <C.Description>{description}</C.Description>
      </C.Info>
    </C.Container>
  )
}

export default SelectionOption
