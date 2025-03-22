import MainLayout from '@/app/layouts/MainLayout.tsx'
import { About } from '@/pages/about'
import { HomePage } from '@/pages/home'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{
				index: true,
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/book/:id',
				element: <About />,
			},
		],
	},
	{
		path: '*',
		element: 'ERROR 404',
	},
])
