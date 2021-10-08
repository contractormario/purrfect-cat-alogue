import React, { useEffect, useRef, useState } from 'react'
import { RouteComponentProps, Link, navigate } from '@reach/router'
import { AppBar, Box, Toolbar, Button, ImageList, ImageListItem, Grid, Skeleton } from '@mui/material'

export function MainMenu() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={()=>{navigate('/')}}>Home</Button>
        <Button color="inherit" onClick={()=>{navigate('/upload')}}>Upload</Button>
      </Toolbar>
    </AppBar>
  )
}