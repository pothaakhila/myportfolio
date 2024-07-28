import Header from './components/header/Header'
import Head from 'next/head';



const page = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
 
    <div>
   <Header/>
  
    </div>
    </>
  )
}

export default page