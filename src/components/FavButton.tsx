import styled from 'styled-components'

export function FavButton({ onClick, isFaved }:any) {
  return (
    <FavButtonDiv onClick={onClick} isFaved={isFaved}>
    </FavButtonDiv>
  )
}

type FavButtonDivProps = {
  isFaved: boolean
}

const FavButtonDiv = styled.div<FavButtonDivProps>`
  color: white;
  font-size: 24pt;
  z-index: 100;
  --background: url('/heart.png');
  mask: url('/${props => props.isFaved ? 'heart' : 'heart-empty'}.png') center/contain;
  width: 32px;
  height: 32px;
  background-size: cover;
  background-color: pink;
  cursor: pointer;
  margin-right: 20px;
`