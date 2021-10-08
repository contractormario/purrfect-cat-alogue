import styled from 'styled-components'

export function VoteUpButton({ onClick }:any) {
  return (
    <VoteUpButtonDiv onClick={onClick}>
    </VoteUpButtonDiv>
  )
}

const VoteUpButtonDiv = styled.div`
  width: 32px;
  height: 32px;
  background-size: contain;
  cursor: pointer;
  display: inline-block;
  mask: url('/like.png') center/contain;
  background-size: cover;
  background-color: #00ff00;
  margin-right: 10px;
`