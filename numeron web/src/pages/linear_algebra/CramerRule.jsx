import React from 'react'
import InputMatrix from '../../components/InputMatrix'
import { Container } from 'react-bootstrap'
export default function CramerRule() {
  const X = []
  return (
    <Container>
        <div className='layout'><h1>Cramer Rule</h1></div>
        <InputMatrix></InputMatrix>
    </Container>
    
  )
}
