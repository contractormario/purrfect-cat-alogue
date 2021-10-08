import styled from 'styled-components'

export function CatScore({ value }:any) {
  return (
    <CatScoreDiv>
      Score: {value}
    </CatScoreDiv>
  )
}

const CatScoreDiv = styled.div`
  bottom: 0;
  color: white;
  display: inline-block;
  margin-left: 20px;
  margin-right: 30px;
  font-size: 16pt;
`