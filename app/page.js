import Footer from '../components/Footer/page'
import Header from '../components/Header/page'
import ContactUs from '../components/ContactUs/page'
import PriceCards from '../components/PriceCards/page'
import Estates from '../components/Estates/page'
import AdvanceProtection from '@/components/AdvanceProtection/page'
import AroundText from '@/components/AroundText/page'
import Parallax from '@/components/Parallax/page'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Header />
      <div className='landing'>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,minimum-scale=1, user-scalable=no" />
        </Head>
      <Parallax />
      <AroundText />
      <AdvanceProtection />
      <Estates />
      <PriceCards />
      <ContactUs />
      </div>
      <Footer />
    </>
  )
}
