import styled from 'styled-components'
import { ButtonHTMLAttributes, FormHTMLAttributes, ReactNode } from 'react'

export const FormVagas = styled.form<FormHTMLAttributes<HTMLFormElement>>`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

interface BotaoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Botão = styled.button<BotaoProps>`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`

export const Campo = styled.input.attrs({ type: 'search' })<
  React.InputHTMLAttributes<HTMLInputElement>
>`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`
