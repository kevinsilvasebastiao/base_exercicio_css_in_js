import React from 'react'
import {
  VagaItem,
  VagaTitulo,
  VagaDetalhes,
  VagaDetalheItem,
  VagaLink
} from './VagaStyles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <VagaItem>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <VagaDetalhes>
      <VagaDetalheItem>Localizacao: {props.localizacao}</VagaDetalheItem>
      <VagaDetalheItem>Senioridade: {props.nivel}</VagaDetalheItem>
      <VagaDetalheItem>Tipo de contratacao: {props.modalidade}</VagaDetalheItem>
      <VagaDetalheItem>
        Salário: {props.salarioMin} - {props.salarioMax}
      </VagaDetalheItem>
      <VagaDetalheItem>
        Requisitos: {props.requisitos.join(', ')}
      </VagaDetalheItem>
    </VagaDetalhes>
    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </VagaItem>
)

export default Vaga
