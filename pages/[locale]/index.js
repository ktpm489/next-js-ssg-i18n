import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import { useEffect, useState} from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import LoadingModal from '../../components/LoadingModal'
import Link from '../../components/Link'

const Homepage = () => {
  const { t } = useTranslation(['common', 'footer'])
  const [loading, setLoading] = useState(false)
  const handleThinking = () => {
      setLoading(true)
      setTimeout(()=> {
        setLoading(false)
      }, 3000)
  }  

  return (
    <>
      <main>
        <Header heading={t('h1')} title={t('title')} />
        <div>
          <LoadingModal text={t('thinking')} isLoading={loading}/>
          <button onClick={handleThinking}>{'SetLoading'}</button>
          <Link href='/second-page'>
            <button
              type='button'
            >
              {t('to-second-page')}
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Homepage

const getStaticProps = makeStaticProps(['common', 'footer'])
export { getStaticPaths, getStaticProps }
