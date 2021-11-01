import * as C from './style'
import Link from 'next/link'
import { Profile, Book, Mail } from '../../svgs/icons'

type Props = {
  title: string
  description: string
  icon: string
  path: string
  active: boolean
}

const SideBarItem: React.FC<Props> = ({
  title,
  description,
  icon,
  path,
  active
}) => {
  return (
    <C.Container>
      <Link href={path} passHref={true}>
        <a>
          <C.Info>
            <C.Title>{title}</C.Title>
            <C.Description>{description}</C.Description>
          </C.Info>
          <C.IconArea active={active}>
            {icon === 'profile' && (
              <Profile width="20" height="20" fill="white" />
            )}
            {icon === 'book' && <Book width="20" height="20" fill="white" />}
            {icon === 'contato' && <Mail width="20" height="20" fill="white" />}
          </C.IconArea>
          <C.Point active={active}></C.Point>
        </a>
      </Link>
    </C.Container>
  )
}

export default SideBarItem
