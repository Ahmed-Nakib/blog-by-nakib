import { ThemeProvider } from '@/provider/theme-provider'
import router from '@/router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { Toaster } from 'sonner'
import './index.css'
import { Provider } from 'react-redux'
import { store } from '@/redux/stor'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
      <Toaster />
    </ThemeProvider>
  </StrictMode>,
)
