import axios from 'axios'
import { create } from 'zustand'
import { Book } from './types'

interface BooksState {
	books: Book[]
	book: Book | null
	loading: boolean
	editBook: Book | null
	getBooks: () => void
	getBookById: (id: number | unknown) => void
	addBook: (book: Book) => void
	removeBook: (id: number | any) => void
	updateBook: (book: Book) => void
	setEditBook: (book: Book | null) => void
}

export const useBooksStore = create<BooksState>(set => ({
	books: [],
	book: null,
	loading: false,
	editBook: null,
	getBookById: async id => {
		try {
			set({ loading: true })
			const res = await axios.get(`${import.meta.env.VITE_BASE_URL}books/${id}`)
			set({
				book: res.data,
				loading: false,
			})
		} catch {
			set({ loading: false })
			set({ book: null })
		}
	},
	getBooks: async () => {
		try {
			set({ loading: true })
			const res = await axios.get(`${import.meta.env.VITE_BASE_URL}books`)
			set({
				books: res.data,
				loading: false,
			})
		} catch {
			set({ loading: false })
			set({ books: [] })
		}
	},
	addBook: async book => {
		try {
			const res = await axios.post(
				`${import.meta.env.VITE_BASE_URL}books`,
				book
			)
			set(state => ({ books: [...state.books, res.data] }))
		} catch (error) {
			console.error('Failed to add book:', error)
		}
	},
	removeBook: async id => {
		try {
			const res = await axios.delete(
				`${import.meta.env.VITE_BASE_URL}books/${id}`
			)
			set(state => ({ books: [...state.books, res.data] }))
			window.location.href = '/'
		} catch (error) {
			console.error('Failed to add book:', error)
		}
	},
	updateBook: async updatedBook => {
		try {
			await axios.put(
				`${import.meta.env.VITE_BASE_URL}books/${updatedBook.id}`,
				updatedBook
			)
			set(state => ({
				books: state.books.map(b =>
					b.id === updatedBook.id ? updatedBook : b
				),
			}))
		} catch (error) {
			console.error('Failed to update book:', error)
		}
	},
	setEditBook: book => set({ editBook: book }),
}))
