import { navigate } from '@reach/router'
import { AppBar, Toolbar, Button } from '@mui/material'

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