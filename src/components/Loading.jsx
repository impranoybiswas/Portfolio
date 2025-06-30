import React from 'react'
import Container from '../customs/Container'

export default function Loading() {
  return (
    <Container>
      <span className="loading loading-spinner h-24 w-24 text-secondary" />
    </Container>
  )
}
