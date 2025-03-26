import { useBooksStore } from '@/entities/book/model/store'
import ImageWithSkeleton from '@/shared/ui/ImageWithSkeleton'
import { useEffect } from 'react'
import { FaTrash } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import cls from './About.module.scss'

const AboutPage = () => {
	const { getBookById, book, loading, removeBook } = useBooksStore()
	const { id } = useParams()

	useEffect(() => {
		if (book === null) {
			getBookById(id)
		}
	}, [])

	const handleDelete = () => {
		if (book?.id) {
			removeBook(id)
		}
	}

	if (loading) {
		return <>Loading</>
	}
	return (
		<div className='page_container'>
			<div className={cls.about_wrapper}>
				<div className={cls.about_content}>
					<ImageWithSkeleton
						src={book?.cover}
						className={cls.book_cover}
						loaderHeight='100%'
						loaderWidth='100%'
					/>
					<div className={cls.book_info}>
						<div className={cls.book_header}>
							<h1>{book?.title}</h1>
							<button onClick={handleDelete} className={cls.delete_button}>
								<FaTrash />
							</button>
						</div>
						<h2>{book?.author}</h2>
						<p>{book?.description} </p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutPage
