import styled from 'styled-components'

export const HeroForm = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  padding: 32px 0;
  margin-top: 40px;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-principal);
    content: '';
    opacity: 0.7;
  }

  .container {
    position: relative;
    color: #eee;
    text-align: center;
  }

  .heroTitle {
    font-family: Gloock, serif;
    font-size: 48px;
    margin: 0;
  }

  @media (max-width: 768px) {
    height: auto;

    .heroTitle {
      font-size: 32px;
    }
  }
`
