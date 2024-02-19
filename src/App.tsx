import './global.css'

import { RouterProvider } from 'react-router-dom'

import { router } from './src/routes'

export function App() {
  return <RouterProvider router={router} />
}
