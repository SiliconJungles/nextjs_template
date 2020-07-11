import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import IndexPage from '_pages'

test('shows Index page template', () => {
  render(<IndexPage />)

  expect(screen.queryByText('Next JS Template')).toBeTruthy()
})
