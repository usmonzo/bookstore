import { BookComponent } from '@/entities/book'
import { useBooksStore } from '@/entities/book/model/store'
import Empty from '@/shared/ui/Empty'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import cls from './Home.module.scss'

export default function Home() {
	const { getBooks, books } = useBooksStore()
	const navigate = useNavigate()

	useEffect(() => {
		getBooks()
	}, [])

	return (
		<div className='page_container'>
			<h3 className={cls.page_title}>Книги</h3>
			<div className={cls.page_content}>
				{books.length > 0 ? (
					books.map(book => (
						<BookComponent
							key={book.id}
							id={book.id}
							title={book.id + book.title}
							author={book.author}
							cover={book.cover || ''}
							description={book.description || 'No description available'}
							pages={book.pages || 0}
							onClick={() => {
								useBooksStore.setState(() => ({
									book: book,
								}))
								navigate(`/book/${book.id}`)
							}}
						/>
					))
				) : (
					<Empty />
				)}
			</div>
		</div>
	)
}
