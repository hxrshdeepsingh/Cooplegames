import './styles.css'

import { Navbar } from '@/components/navbar/navbar'
import { Footer } from '@/components/footer/footer'

import { ThemeProvider } from '@/providers/theme-provider'

export const metadata = {
  description: 'CoopleGames',
  title: 'CoopleGames',
}

export default async function RootLayout(props: any) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
