import Link from '../../components/Link'

import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import styled from "styled-components";

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 500px;
  gap: 20px;
  margin-top: 100px;
  align-items: center;
`
const Text= styled.div`
  color: blue;
  font-size: 16px;
  font-weight: bold;
`



const SecondPage = () => {
  const { t } = useTranslation(['second-page', 'common', 'footer'])

  return (
    <>
      <main>
        <Header heading={t('h1')} title={t('title')} />
        <Link href='/'>
          <button
            type='button'
          >
            {t('common:back-to-home')}
          </button>
        </Link>
        <Box>
      <Text>Test Data</Text>
    </Box>
      </main>
      <Footer />
    </>
  )
}

export default SecondPage

const getStaticProps = makeStaticProps(['second-page', 'common', 'footer'])
export { getStaticPaths, getStaticProps }