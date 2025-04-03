import './globals.css'

export const metadata = {
  title: 'Event Package Calculator',
  description: 'Calculate event packages and pricing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  )
}
