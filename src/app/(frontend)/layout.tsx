import './styles.css'

import { Navbar } from '@/components/navbar/navbar'
import { Footer } from '@/components/footer/footer'
import NextTopLoader from 'nextjs-toploader';

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
        <NextTopLoader
          color="#a34ef0"
          initialPosition={0.08}
          crawlSpeed={200}
          height={5}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="none"
        />
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
