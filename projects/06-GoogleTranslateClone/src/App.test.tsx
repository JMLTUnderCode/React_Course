import { test,  expect } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('renders App component', async () => {
  const user = userEvent.setup();
  const app = render(<App />);

  const textareaFrom = app.getByPlaceholderText('Enter text');
  expect(textareaFrom).toBeTruthy();
  
  await user.type(textareaFrom, 'Hola como estas');
  const result = await app.findByDisplayValue(/Hello how are you/i, {}, { timeout: 5000});

  expect(result).toBeTruthy();
})