import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

export const metadata = {
  title: 'Frames by Nirmal',
  description: 'Golden Moments Frozen in Time',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <div className='childrenContainer'>
          {children}
        </div>
        <Footer/>
        </body>
    </html>
  )
}
