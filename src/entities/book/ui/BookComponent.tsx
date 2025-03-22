import ImageWithSkeleton from '@/shared/ui/ImageWithSkeleton'
import { BookComponentProps } from '../model/types'
import cls from './BookComponent.module.scss'

export const BookComponent = ({
	title,
	cover,
	onClick,
}: BookComponentProps) => {
	return (
		<div
			className={cls.container}
			onClick={onClick}
			style={{ flexGrow: 1, flexShrink: 0 }}
		>
			<h2 className={cls.title}>{title}</h2>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					padding: '10px',
				}}
			>
				{cover && (
					<ImageWithSkeleton
						src={cover}
						alt={title}
						className={cls.cover}
						loaderHeight='220px'
						loaderWidth='150px'
					/>
				)}
			</div>
			{/* <h4 className={cls.author}>{author}</h4> */}
			{/* <h4 className={cls.description}>{description}</h4> */}
			{/* <h4 className={cls.pages}>{pages}</h4> */}
		</div>
	)
}
