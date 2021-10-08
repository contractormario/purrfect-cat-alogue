import styled from 'styled-components'
import { CatsListItem } from './CatsListItem'

function CatsListRow({ images, onVoteUp, onVoteDown, onFavToggle }:CatImagesRowProps) {
  const imagesJsx = images.map((image:any) => {
    return <CatsListItem imageId={image.id} imageUrl={image.url} score={image.score} isFav={image.isFav} favId={image.favId} onVoteUp={onVoteUp} onVoteDown={onVoteDown} onFavToggle={onFavToggle} />
  })
  return (
    <CatImagesRowDiv>
      {imagesJsx}
    </CatImagesRowDiv>
  )
}

type CatImagesRowProps = {
  images: any[],
  onVoteUp: any,
  onVoteDown: any,
  onFavToggle: any
}

const CatImagesRowDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50vh;
`

const CatsList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export {
  CatsListRow,
  CatsList
}