import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  height: 100%;
  padding: 4.6rem 5.4rem;
`;

export const Image = styled.img`
  margin-top: 2rem;
  width: 128px;
  height: 119px;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    width: 100%;
    font-family: 'PokemonSolid';
    font-size: 3rem;
    color: ${theme.colors.white};
    font-weight: ${theme.font.medium};
    font-style: normal;
    text-align: center;
    margin-top: 1rem;

    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #000000;
  `}
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.8rem;
`;