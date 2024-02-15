import { configureStore } from '@reduxjs/toolkit'
import { themeSlice } from './slices'

export const store = configureStore({ reducer: { theme: themeSlice } })
