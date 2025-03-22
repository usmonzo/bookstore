import { Provider as UIProvider } from '@/shared/components/ui/provider'
import {FC, PropsWithChildren, Suspense} from 'react'

const Providers: FC<PropsWithChildren> = ({ children }) => {
	return <UIProvider>
      <Suspense>
        {children}
      </Suspense>
    </UIProvider>
}

export default Providers
