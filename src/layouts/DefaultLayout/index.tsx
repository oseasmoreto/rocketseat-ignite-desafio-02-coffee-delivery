import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Common/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  )
}
