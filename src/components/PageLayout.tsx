import React, { useEffect, useRef, useState } from 'react'
import { RouteComponentProps, Link, navigate } from '@reach/router'
import { AppBar, Box, Toolbar, Button, ImageList, ImageListItem, Grid, Skeleton } from '@mui/material'
import { MainMenu, CatsList, CatsListRow, CatsListItem } from '.'
import styled from 'styled-components'

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
