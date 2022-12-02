import Image from 'next/image'
import camisa1 from '../assets/camisetas/camisa-1.png'

export default function Home() {
  return (
    <main className='flex gap-12 max-w-[calc(100vw-((100vw-1180px)/2))] w-full ml-auto min-h-[656px]'>
		<a className='group bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-1 cursor-pointer relative flex items-center overflow-hidden'>
			<Image src={camisa1} width={520} height={480} alt='' className='object-cover'/>
			<footer 
				className='
					absolute bottom-1 left-1 right-1 rounded-md flex justify-between items-center 
					bg-[rgba(0,0,0,0.6)] p-8 translate-y-[110%] opacity-0 transition group-hover:translate-y-0
					group-hover:opacity-100
				'
			>
				<strong className='text-xl'>Camiseta X</strong>
				<span className='font-bold text-2xl text-green-400'>R$ 79,90</span>
			</footer>
		</a>
		<a className='group bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-1 cursor-pointer relative flex items-center overflow-hidden'>
			<Image src={camisa1} width={520} height={480} alt='' className='object-cover'/>
			<footer 
				className='
					absolute bottom-1 left-1 right-1 rounded-md flex justify-between items-center 
					bg-[rgba(0,0,0,0.6)] p-8 translate-y-[110%] opacity-0 transition group-hover:translate-y-0
					group-hover:opacity-100
				'
			>
				<strong className='text-xl'>Camiseta X</strong>
				<span className='font-bold text-2xl text-green-400'>R$ 79,90</span>
			</footer>
		</a>
		<a className='group bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-1 cursor-pointer relative flex items-center overflow-hidden'>
			<Image src={camisa1} width={520} height={480} alt='' className='object-cover'/>
			<footer 
				className='
					absolute bottom-1 left-1 right-1 rounded-md flex justify-between items-center 
					bg-[rgba(0,0,0,0.6)] p-8 translate-y-[110%] opacity-0 transition group-hover:translate-y-0
					group-hover:opacity-100
				'
			>
				<strong className='text-xl'>Camiseta X</strong>
				<span className='font-bold text-2xl text-green-400'>R$ 79,90</span>
			</footer>
		</a>
	</main>
  )
}
