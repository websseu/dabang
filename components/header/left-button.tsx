'use client'

import Link from 'next/link'
import { GiMoebiusStar } from 'react-icons/gi'
import { useTheme } from 'next-themes'

export default function LeftButton() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className='absolute left-4'>
      <Link href='/' className='circle'>
        <GiMoebiusStar size='20' onClick={toggleTheme} />
      </Link>
    </div>
  )
}
