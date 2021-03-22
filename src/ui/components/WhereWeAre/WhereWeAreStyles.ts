import styled, { keyframes } from 'styled-components'

export const WhereWeAreContainer = styled.section`
  @media screen and (min-width: 1200px) {
    display: flex;

    background-image: url('/img/Mapa Mundi.svg');
    background-size: auto;
    background-repeat: no-repeat;
    background-position: 30% 0%;

    height: 48rem;
  }
`

export const WhereWeArePlaces = styled.div`
  @media screen and (min-width: 1200px) {
    color: #534554;
    font-size: 5.6rem;
    line-height: 5.6rem;
    flex: 1;

    display: flex;
    flex-direction: column;

    padding-right: 9.5rem;

    align-items: flex-end;
    justify-content: center;
  }
`

export const WhereWeArePhrase = styled.p`
  @media screen and (min-width: 1200px) {
    flex: 1;
    background-color: #fbfbfb;

    color: #640055;

    font-size: 5.6rem;
    font-family: 'Gotham';
    font-weight: 500;
    line-height: 5.6rem;

    display: flex;
    flex-direction: column;

    justify-content: center;

    padding-left: 10rem;

    strong {
      font-family: 'Gotham-Bold';
    }
  }
`
export const TypeWriter = keyframes`
  from {
    width: 0;
  }

  to {
    width: 100%
  }
`

export const BlinkTextCursor = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #534554; }

`

export const TypeWriterEffect = styled.span`
  overflow: hidden;
  max-width: fit-content;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  padding-right: 0.3rem;
  animation: ${TypeWriter} 5s steps(40, end) forwards,
    ${BlinkTextCursor} 0.75s step-end infinite;
`

export const BreakLine = styled.span`
  display: block;
`
