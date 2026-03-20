import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import AlertButton from './AlertButton.jsx'
import Toolbar from './Toolbar.jsx'

// --- Normal Cases ---

test('Play button displays correct label', () => {
  render(<AlertButton message="Playing movie" bgColor="green">Play</AlertButton>)
  expect(screen.getByText('Play')).toBeInTheDocument()
})

test('clicking Play button shows correct alert', async () => {
  const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {})
  render(<AlertButton message="Playing movie" bgColor="green">Play</AlertButton>)
  await userEvent.click(screen.getByText('Play'))
  expect(alertMock).toHaveBeenCalledWith('Playing movie')
  alertMock.mockRestore()
})

test('clicking Record button shows correct alert', async () => {
  const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {})
  render(<AlertButton message="Recording audio" bgColor="red">Record</AlertButton>)
  await userEvent.click(screen.getByText('Record'))
  expect(alertMock).toHaveBeenCalledWith('Recording audio')
  alertMock.mockRestore()
})

test('clicking Upload button shows correct alert', async () => {
  const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {})
  render(<AlertButton message="Uploading file" bgColor="blue">Upload</AlertButton>)
  await userEvent.click(screen.getByText('Upload'))
  expect(alertMock).toHaveBeenCalledWith('Uploading file')
  alertMock.mockRestore()
})

test('Toolbar renders all three buttons', () => {
  render(<Toolbar />)
  expect(screen.getByText('Play')).toBeInTheDocument()
  expect(screen.getByText('Record')).toBeInTheDocument()
  expect(screen.getByText('Upload')).toBeInTheDocument()
})

// --- Edge Cases ---

test('clicking Play does not trigger Record or Upload alert messages', async () => {
  const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {})
  render(<Toolbar />)
  await userEvent.click(screen.getByText('Play'))
  expect(alertMock).not.toHaveBeenCalledWith('Recording audio')
  expect(alertMock).not.toHaveBeenCalledWith('Uploading file')
  alertMock.mockRestore()
})

test('rapid clicks on a button trigger alert each time', async () => {
  const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {})
  render(<AlertButton message="Playing movie" bgColor="green">Play</AlertButton>)
  const button = screen.getByText('Play')
  await userEvent.click(button)
  await userEvent.click(button)
  await userEvent.click(button)
  expect(alertMock).toHaveBeenCalledTimes(3)
  alertMock.mockRestore()
})

test('button is keyboard accessible and triggers alert on Enter', async () => {
  const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {})
  render(<AlertButton message="Playing movie" bgColor="green">Play</AlertButton>)
  const button = screen.getByText('Play')
  button.focus()
  await userEvent.keyboard('{Enter}')
  expect(alertMock).toHaveBeenCalledWith('Playing movie')
  alertMock.mockRestore()
})
