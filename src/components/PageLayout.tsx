import { Box } from '@mui/material'
import styled from 'styled-components'
import { MainMenu } from '.'

export function PageLayout({ children }:any) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MainMenu/>
      <PageContent>
        {children}
      </PageContent>
    </Box>
  )
}

const PageContent = styled.div``
