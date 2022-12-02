import type { AppProps } from 'next/app'
import '../styles/globals.css'
import logoImg from '../assets/logo.svg'
import Image from 'next/image'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className='flex flex-col items-center min-h-screen justify-center'>
			<header className='py-8 w-full max-w-[1180px] mx-auto'>
				<Image src={logoImg} alt="" />
			</header>
			<Component {...pageProps} />
		</div>
	)
}


// max-w-[calc(100vw-((100vw-1180)/2))] 