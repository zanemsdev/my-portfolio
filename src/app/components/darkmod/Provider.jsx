'use client'

import React from "react"
import { ThemeProvider } from 'next-themes' // importer le provider


//{ children } : {children: React.ReactNode}
// on destructure props pour extraire children, puis indique le typage de props
function Providers({ children }) {
    return <ThemeProvider>{children}</ThemeProvider>
}

export default Providers