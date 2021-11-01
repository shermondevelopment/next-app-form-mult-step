import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
`
export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  min-height: calc(100vh - 20px);
  display: flex;
  flex-direction: column;
`
export const Steps = styled.div`
  flex: 1;
  display: flex;
`
export const SideBar = styled.div`
  width: 250px;
  border-right: thin solid #8d99ae;
`
export const Page = styled.div`
  flex: 1;
  padding: 40px 0 0 40px;
`
