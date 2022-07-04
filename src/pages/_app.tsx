import '../styles/globals.css'

import type {AppProps} from 'next/app'
import {ConfigProvider} from 'antd'
import MainLayout from '../layout/MainLayout';

// https://ant.design/docs/react/customize-theme-variable
ConfigProvider.config({
  theme: {
    primaryColor: '#25b864',
  },
})

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({Component, pageProps}: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>)

  return (
    <>
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default MyApp
