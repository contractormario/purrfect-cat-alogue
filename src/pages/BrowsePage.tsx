import { useEffect, useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import { ImageListItem, Grid, Skeleton } from '@mui/material'
import { CatsListRow, CatsListItem, PageLayout } from '../components'
import { fetchInitialGif, fetchRandomImage, fetchRandomGif, fetchImages, fetchVotes, fetchFaves, upvoteImage, downvoteImage, favImage, unfavImage } from '../services/DogsApi'
import { useSnackbar } from 'notistack'
import styled from 'styled-components'

export function BrowsePage(props: RouteComponentProps) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const [randomImage, setRandomImage] = useState<any>(null)
  const [isFetching, setIsFetching] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const init = async () => {
    try {
      setIsFetching(true)
      const randomImage = await fetchRandomGif()

      setIsFetching(false)
      setRandomImage(randomImage as any)
    }
    catch(err) {
      setIsFetching(false)
      console.error(err)
    }
  }

  useEffect(() => {
    init().then(() => {
      setIsMounted(true)
    })
  }, [])

  const renderRandomImage = () => {
    if(isMounted) {
      return (
        <Backdrop imageUrl={randomImage.url}>
          <FullScreenImage imageUrl={randomImage.url} />
        </Backdrop>
      )
    }
  }

  return (
    <PageLayout>
      {renderRandomImage()}
    </PageLayout>
  )
}

const FullScreenImage = styled.div<FullScreenImageProps>`
  height: 100%;
  background: url('${props => props.imageUrl}');
  background-size: contain;
  z-index: 2;
`

type BackdropProps = {
  imageUrl: string
}
type FullScreenImageProps = {
  imageUrl: string
}

const Backdrop = styled.div<BackdropProps>`
  background: url('${props => props.imageUrl}');
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(20px);
`