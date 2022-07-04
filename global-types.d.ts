import {NextPage} from 'next';
import {ReactElement, ReactNode} from 'react';

declare global {
  type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
  }

}
