import React, { useEffect, useRef, useState } from 'react'
import { RouteComponentProps, Link, navigate } from '@reach/router'
import { AppBar, Box, Toolbar, Button, ImageList, ImageListItem, Grid, Skeleton } from '@mui/material'
import { MainMenu, CatsList, CatsListRow, CatsListItem, PageLayout } from '../components'
import { fetchImages, fetchVotes, fetchFaves, upvoteImage, downvoteImage, favImage, unfavImage } from '../services/CatsApi'
import { useSnackbar } from 'notistack'

export function HomePage(props: RouteComponentProps) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const [images, setImages] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const fetchAll = async () => {
    try {
      setIsFetching(true)
      const images = await fetchImages()

      for(let image of images) {
        image.upvotes = 0
        image.downvotes = 0
        image.score = 0
        image.isFav = false
      }

      const votes = await fetchVotes()

      const faves = await fetchFaves()

      for(let vote of votes) {
        const image = images.find((image:any) => image.id === vote.image_id)
        if(image) {
          if(vote.value === 1) {
            image.upvotes++
          }
          if(vote.value === 0) {
            image.downvotes++
          }
          image.score = image.upvotes - image.downvotes
        }
      }

      for(let fav of faves) {
        const image = images.find((image:any) => image.id === fav.image_id)
        if(image) {
          image.isFav = true
          image.favId = fav.id
        }
      }

      setIsFetching(false)
      setImages(images as any)
    }
    catch(err) {
      setIsFetching(false)
      console.error(err)
    }
  }

  useEffect(() => {
    fetchAll()
    setIsMounted(true)
  }, [])

  const onVoteUp = (imageId:any) => {
    upvoteImage(imageId)
    .then(() => {
      enqueueSnackbar('Upvoted')
    })
    .catch((err) => {
      console.log('err', err)
    })
    // fetchAll()
  }

  const onVoteDown = (imageId:any) => {
    downvoteImage(imageId)
    .then(() => {
      enqueueSnackbar('Downvoted')
    })
    .catch((err) => {
      console.log('err', err)
    })
    // fetchAll()
  }

  const onFavToggle = (imageId:any, isFav:any, favId:any) => {
    if(isFav) {
      unfavImage(favId)
      // fetchAll()
    }
    else {
      favImage(imageId)
      // fetchAll()
    }
  }

  const imagesPerRow:number = 2
  const numFullRows:number = Math.floor(images.length / imagesPerRow)
  const tailRowLen:number = images.length % imagesPerRow

  let rowsJsx = []

  for(let i=0; i<numFullRows; i++) {
    const start = i*imagesPerRow
    const end = i*imagesPerRow+imagesPerRow
    const slice = images.slice(start, end)
    rowsJsx.push(<CatsListRow images={slice} onVoteUp={onVoteUp} onVoteDown={onVoteDown} onFavToggle={onFavToggle}/>)
  }

  if(tailRowLen > 0) {
    const tailStart = numFullRows*imagesPerRow
    const tailEnd = numFullRows*imagesPerRow+tailRowLen
    const tailSlice = images.slice(tailStart, tailEnd)
    rowsJsx.push(<CatsListRow images={tailSlice} onVoteUp={onVoteUp} onVoteDown={onVoteDown} onFavToggle={onFavToggle}/>)
  }

  const imageListItems = images.map((image:any) => (
    <ImageListItem key={image.id} style={{alignItems:'center',justifyContent:'center'}}>
      <CatsListItem imageId={image.id} imageUrl={image.url} score={image.score} isFav={image.isFav} favId={image.favId} onVoteUp={onVoteUp} onVoteDown={onVoteDown} onFavToggle={onFavToggle} />
    </ImageListItem>
  ))

  const catListItems = images.map((image:any) => (
    <Grid item xs={12} sm={6} md={3}>
      <CatsListItem imageId={image.id} imageUrl={image.url} score={image.score} isFav={image.isFav} favId={image.favId} onVoteUp={onVoteUp} onVoteDown={onVoteDown} onFavToggle={onFavToggle} />
    </Grid>
  ))

  const renderPlaceholders = () => {
    console.log('renderPlaceholders', isMounted, isFetching)
    if(!isMounted) {
    // if(isFetching) {
      let skeletons = []
      skeletons.push((
        <Grid item xs={12} sm={6} md={3}>
          <Skeleton variant="rectangular" height={256} />
        </Grid>
      ))
      skeletons.push((
        <Grid item xs={12} sm={6} md={3}>
          <Skeleton variant="rectangular" height={256} />
        </Grid>
      ))
      skeletons.push((
        <Grid item xs={12} sm={6} md={3}>
          <Skeleton variant="rectangular" height={256} />
        </Grid>
      ))
      skeletons.push((
        <Grid item xs={12} sm={6} md={3}>
          <Skeleton variant="rectangular" height={256} />
        </Grid>
      ))
      return skeletons
    }
  }

  const renderGridItems = () => {
    if(isMounted) {
      return catListItems
    }
    // if(!isFetching) {
    //   return catListItems
    // }
  }

  return (
    <PageLayout>
      <Grid container spacing={2} style={{padding:'30px'}}>
        {renderPlaceholders()}
        {renderGridItems()}
      </Grid>
    </PageLayout>
  )
}
