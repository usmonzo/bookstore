import { router } from '@/app/router'
import { RouterProvider } from 'react-router-dom'
import Providers from './providers/Providers'
import './styles/index.scss'

function App() {
	return (
		<Providers>
			<RouterProvider router={router} />
		</Providers>
	)
}

export default App
