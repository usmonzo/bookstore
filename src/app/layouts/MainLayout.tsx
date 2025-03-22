import Navbar from '@/shared/ui/Navbar'
import { Outlet } from 'react-router'
import cls from './MainLayout.module.scss'

const MainLayout = () => {
	return (
		<div className={cls.main_layout_wrapper}>
			<Navbar />
			<div className={cls.main_layout_container}>
				<div className={cls.main_layout_content}>
					<Outlet />
				</div>
			</div>
			<footer className={cls.main_layout_footer}>
				<p>© 2023 Zypl Bookstore. All rights reserved.</p>
			</footer>
		</div>
	)
}

export default MainLayout
