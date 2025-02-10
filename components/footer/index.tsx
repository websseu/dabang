import { APP_COPYRIGHT, APP_DESCRIPTION, APP_NAME } from '@/lib/constants'

export default async function Footer() {
  return (
    <footer className='footer__container'>
      <div className='border-t border-black py-10 font-bold font-nanum'>
        <h6 className='text-base mb-2'>{APP_NAME}</h6>
        <p className='text-xs w-1/3 leading-5 text-zinc-600 font-medium'>
          {APP_DESCRIPTION}
        </p>
        <p className='text-xs mt-1 font-light text-zinc-500'>{APP_COPYRIGHT}</p>
      </div>
    </footer>
  )
}
