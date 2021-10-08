import styled from 'styled-components'

export function VoteDownButton({ onClick }:any) {
  return (
    <VoteDownButtonDiv onClick={onClick}>
    </VoteDownButtonDiv>
  )
}
const VoteDownButtonDiv = styled.div`
  width: 32px;
  height: 32px;
  background-size: contain;
  cursor: pointer;
  display: inline-block;
  mask: url('/dislike.png') center/contain;
  background-size: cover;
  background-color: #ff0000;
`