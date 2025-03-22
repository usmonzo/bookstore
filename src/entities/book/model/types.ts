export interface Book {
	id?: number
	title: string
	description: string
	author: string
	cover: string
	pages: number
}
export interface BookComponentProps {
	id?: number
	title: string
	description: string
	author: string
	cover: string
	pages: number
	onClick: () => void
}
