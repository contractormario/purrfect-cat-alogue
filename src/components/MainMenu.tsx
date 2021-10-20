import { navigate } from '@reach/router'
import { AppBar, Toolbar, Button } from '@mui/material'

export function MainMenu() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={()=>{navigate('/')}}>Home</Button>
        <Button color="inherit" onClick={()=>{navigate('/browse')}}>Browse</Button>
        <Button color="inherit" onClick={()=>{navigate('/my-images')}}>My Images</Button>
        <Button color="inherit" onClick={()=>{navigate('/my-images/upload')}}>Upload New</Button>
      </Toolbar>
    </AppBar>
  )
}