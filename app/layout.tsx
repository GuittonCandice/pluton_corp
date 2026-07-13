import type { Metadata } from 'next'
import {
  Inter,
  JetBrains_Mono,
  Libre_Baskerville,
  Space_Grotesk,
  Syne,
} from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { ThemeProvider } from '@/components/ThemeProvider'
import { DEFAULT_THEME } from '@/lib/themes'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['600', '700', '800'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['500', '600', '700'],
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  variable: '--font-libre-baskerville',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Pluton Corp — Agence de développement',
  description:
    'Agence de développement logiciel. Cadrage, développement, gestion de projet et maintenance pour accompagner la croissance de nos clients.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      data-theme={DEFAULT_THEME}
      className={`${inter.variable} ${syne.variable} ${spaceGrotesk.variable} ${libreBaskerville.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="site-body">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('pluton-theme');if(t==='editorial'||t==='minimal'||t==='premium'){document.documentElement.dataset.theme=t}}catch(e){}`,
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
          strategy="lazyOnload"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </body>
    </html>
  )
}
