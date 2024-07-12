import styled from 'styled-components'

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const FormInput = styled.input`
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline-color: var(--cor-principal);
`

export const FormButton = styled.button`
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3; /* Altere a cor conforme necessário */
  }
`
