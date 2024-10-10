import { Prompt } from 'next/font/google';
import { Aside } from '@/components/Aside';
import '../styles/globals.css';
import ThemeToggleButton from '@/components/ThemeToggle/ThemeToggle';
import { Heading } from '@/components/Heading';

export const metadata = {
  title: 'Code Connect',
  description: 'Uma rede social para devs!',
}

const prompt = Prompt({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${prompt.className} bg-white dark:bg-gray-900`}>
      <body className="text-black dark:text-white">
        <header className={`${prompt.className} bg-white dark:bg-gray-900`}>
          <nav className="flex items-center justify-between p-4">

            <ThemeToggleButton />
          </nav>

        </header>
        <div className='app-container'>

          <div >
            <Aside />
          </div>
          <div className='main-content'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
