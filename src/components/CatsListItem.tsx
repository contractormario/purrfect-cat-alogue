import styled from 'styled-components'
import { FavButton, CatScore, VoteUpButton, VoteDownButton } from '.'

export function CatsListItem({ imageId, imageUrl, score, isFav, favId, onVoteUp, onVoteDown, onFavToggle }: CatProps) {
  return (
    <CatsListItemDiv>
      <CatImage src={imageUrl} />
      <ButtonsRow>
        <LeftButtons>
          <CatScore value={score} />
          <VoteUpButton onClick={() => onVoteUp(imageId)}/>
          <VoteDownButton onClick={() => onVoteDown(imageId)}/>
        </LeftButtons>
        <RightButtons>
          <FavButton onClick={() => onFavToggle(imageId, isFav, favId)} isFaved={isFav} />
        </RightButtons>
      </ButtonsRow>
    </CatsListItemDiv>
  )
}

type CatProps = {
  imageId: any,
  imageUrl: any,
  score: any,
  isFav: boolean,
  favId: any,
  onVoteUp: any,
  onVoteDown: any,
  onFavToggle: any
}

const CatsListItemDiv = styled.div`
  height: 256px;
  position: relative;
`

const CatImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ButtonsRow = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(6px);
  padding-top: 10px;
  padding-bottom: 10px;
`
const LeftButtons = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const RightButtons = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`