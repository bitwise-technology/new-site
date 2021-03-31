import styled, { keyframes } from 'styled-components'

export const WhereWeAreContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10rem;
  align-items: flex-start;

  background-image: url('/img/Mapa Mundi.svg'),
    linear-gradient(to bottom right, rgba(255, 255, 255, 0.4), transparent);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0% -100%;
  background-clip: border-box;

  height: 45rem;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    padding-top: 0;

    background-image: url('/img/Mapa Mundi.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 28% 0%;

    height: 48rem;
  }
`

export const WhereWeArePlaces = styled.div`
  color: #534554;
  font-size: 3.6rem;
  line-height: 5.6rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1rem;
  @media screen and (min-width: 768px) {
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
  color: #640055;

  font-size: 3.8rem;
  font-family: 'Gotham';
  font-weight: 500;
  line-height: 4.6rem;
  flex: 1;

  display: flex;
  flex-direction: column;

  justify-content: flex-start;

  padding-left: 2rem;
  strong {
    font-family: 'Gotham-Bold';
  }

  small {
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 600;
  }
  @media screen and (min-width: 768px) {
    flex: 1;
    background-color: #fbfbfb;

    color: #640055;

    font-size: 5.8rem;
    font-family: 'Gotham';
    font-weight: 500;
    line-height: 5.6rem;
    justify-content: center;

    padding-left: 10rem;

    strong {
      font-family: 'Gotham-Bold';
    }

    small {
      margin-top: 1rem;
      font-size: 4rem;
      font-weight: 600;
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
  border-right: 3px solid rgba(255, 255, 255, 0.75);
  padding-right: 0.3rem;
  animation: ${TypeWriter} 5s steps(40, end) forwards,
    ${BlinkTextCursor} 0.75s step-end infinite;
`

export const BreakLine = styled.span`
  display: block;
`
