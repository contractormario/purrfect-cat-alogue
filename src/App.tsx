import { Router } from '@reach/router'
import { HomePage, BrowsePage, MyImagesPage, UploadPage } from './pages'

export default function App() {
  return (
    <Router>
      <HomePage path='/'/>
      <BrowsePage path='/browse'/>
      <MyImagesPage path='/my-images'/>
      <UploadPage path='/my-images/upload'/>
    </Router>
  );
}