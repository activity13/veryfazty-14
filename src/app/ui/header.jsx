//Utiles
import Link from 'next/link';
import Image from 'next/image';
//Custom Styles


export default function Page() {
  return (
      <header className='text-center pt-5 h-[25vh]'>
        <div className='flex flex-row justify-center mb-5'>
            <h1 className='text-7xl title'>
                <Link href="/">Veryfazty</Link>
            </h1>
            <div>
                <Image 
                    className='pt-3'
                    src='/images/solo-moto.png' 
                    width='65'
                    height='50'
                    alt='logo de veryfazty, reparto a domicilio en vichayito y pocitas' 
                />
            </div>
        </div>
        <h2 className='text-3xl'>Delivery de los mejores restaurantes en Vichayito y Pocitas</h2>
      </header>
  )
}