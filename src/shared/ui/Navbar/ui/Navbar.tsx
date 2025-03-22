import { useBooksStore } from '@/entities/book/model/store'
import Logo from '@/shared/assets/search.svg?react'
import { CustomModal } from '@/shared/ui/CustomModal'
import { Button, Input, Textarea } from '@chakra-ui/react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import cls from './Navbar.module.scss'

export const Navbar = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [newBook, setNewBook] = useState({
		id: 0,
		title: '',
		author: '',
		description: '',
		pages: 0,
		cover: '',
	})
	const { addBook, setEditBook, updateBook, book } = useBooksStore()
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isEditModalOpen, setIsEditModalOpen] = useState(false)
	const [localEditBook, setLocalEditBook] = useState<any>({
		title: '',
		author: '',
		description: '',
		pages: 0,
		cover: '',
	})

	const handleAddBook = () => {
		if (newBook.title && newBook.author) {
			addBook(newBook)
			setNewBook({
				id: 0,
				title: '',
				author: '',
				description: '',
				pages: 0,
				cover: '',
			})
			alert('Book added successfully!')
			setIsModalOpen(false)
		} else {
			alert('Please fill in all required fields.')
		}
	}

	const handleEditClick = () => {
		setEditBook(book)
		setLocalEditBook(book)
		setIsEditModalOpen(true)
	}

	const handleEditModalSubmit = () => {
		if (localEditBook) {
			updateBook(localEditBook)
			useBooksStore.setState(state => ({
				book: { ...state.book, ...localEditBook },
			}))
			setIsEditModalOpen(false)
		}
	}

	return (
		<header className={cls.navbar_container}>
			<div className={cls.navbar_content}>
				<Link to='/' className={cls.logo_container}>
					<Logo fill='#ffffff' />
					<h1>Bookz</h1>
				</Link>
				<nav className={cls.nav_links}>
					<button
						className={cls.mobile_menu_button}
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					>
						☰
					</button>
					<ul
						className={`${cls.menu_items} ${
							isMobileMenuOpen ? cls.menu_open : ''
						}`}
					>
						<li>
							<Button variant={'subtle'} onClick={() => setIsModalOpen(true)}>
								+ Добавить
							</Button>
						</li>
					</ul>
				</nav>
			</div>
			<CustomModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				title='Добавить новую книгу'
				onSubmit={handleAddBook}
			>
				<form
					onSubmit={e => {
						e.preventDefault()
						handleAddBook()
					}}
					className={cls.modal_form}
				>
					<Input
						type='text'
						placeholder='Название'
						value={newBook.title ?? ''}
						onChange={e => setNewBook({ ...newBook, title: e.target.value })}
						required
						className={cls.input_field}
					/>
					<Input
						type='text'
						placeholder='Автор'
						value={newBook.author ?? ''}
						onChange={e => setNewBook({ ...newBook, author: e.target.value })}
						required
						className={cls.input_field}
					/>
					<Input
						type='url'
						placeholder='URL'
						value={newBook.cover ?? ''}
						onChange={e => setNewBook({ ...newBook, cover: e.target.value })}
						required
						className={cls.input_field}
					/>
					<Input
						type='number'
						placeholder='Страницы'
						value={newBook.pages ?? ''}
						onChange={e =>
							setNewBook({ ...newBook, pages: Number(e.target.value) })
						}
						required
						className={cls.input_field}
					/>
					<Textarea
						placeholder='Описание'
						value={newBook.description ?? ''}
						onChange={e =>
							setNewBook({ ...newBook, description: e.target.value })
						}
						className={cls.textarea_field}
					/>
				</form>
			</CustomModal>
			{pathname !== '/' && (
				<div className={cls.navbar_secondary}>
					<button onClick={() => navigate('/')} className={cls.back_button}>
						← Назад
					</button>
					<h1 className={cls.page_title}>Подробнее</h1>
					<button onClick={handleEditClick} className={cls.edit_button}>
						Изменить ✎
					</button>
				</div>
			)}
			<CustomModal
				isOpen={isEditModalOpen}
				onClose={() => setIsEditModalOpen(false)}
				title='Изменить книгу'
				onSubmit={handleEditModalSubmit}
			>
				<form
					onSubmit={e => {
						e.preventDefault()
						handleEditModalSubmit()
					}}
					className={cls.modal_form}
				>
					<Input
						type='text'
						placeholder='Название'
						value={localEditBook?.title ?? ''}
						onChange={e =>
							setLocalEditBook({ ...localEditBook, title: e.target.value })
						}
						required
						className={cls.input_field}
					/>
					<Input
						type='text'
						placeholder='Автор'
						value={localEditBook?.author ?? ''}
						onChange={e =>
							setLocalEditBook({ ...localEditBook, author: e.target.value })
						}
						required
						className={cls.input_field}
					/>
					<Input
						type='number'
						placeholder='Страницы'
						value={localEditBook?.pages ?? ''}
						onChange={e =>
							setLocalEditBook({
								...localEditBook,
								pages: Number(e.target.value),
							})
						}
						required
						className={cls.input_field}
					/>
					<Textarea
						placeholder='Описание'
						value={localEditBook?.description ?? ''}
						onChange={e =>
							setLocalEditBook({
								...localEditBook,
								description: e.target.value,
							})
						}
						className={cls.textarea_field}
					/>
				</form>
			</CustomModal>
		</header>
	)
}
