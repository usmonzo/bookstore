import { Skeleton } from '@chakra-ui/react'
import { useState } from 'react'

interface ImageWithSkeleton {
	src?: string
	alt?: string
	loaderHeight: string
	loaderWidth: string
	className: string
}

export const ImageWithSkeleton = ({
	src,
	alt,
	loaderHeight = '240px',
	loaderWidth = '200px',
	className,
}: ImageWithSkeleton) => {
	const [isLoaded, setIsLoaded] = useState(false)

	return (
		<div style={{ position: 'relative', display: 'inline-block' }}>
			{!isLoaded && (
				<Skeleton
					height={loaderHeight}
					width={loaderWidth}
					style={{ borderRadius: '8px' }}
				/>
			)}
			<img
				src={src}
				alt={alt}
				onLoad={() => setIsLoaded(true)}
				style={{
					display: isLoaded ? 'block' : 'none',
					width: loaderWidth,
					height: loaderHeight,
					borderRadius: '8px',
				}}
				className={className}
			/>
		</div>
	)
}
