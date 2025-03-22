import { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import cls from './CustomModal.module.scss'

interface CustomModalProps {
	isOpen: boolean
	onClose: () => void
	title: string
	children: ReactNode
	onSubmit?: () => void
}

export const CustomModal = ({
	isOpen,
	onClose,
	title,
	children,
	onSubmit,
}: CustomModalProps) => {
	if (!isOpen) return null

	return ReactDOM.createPortal(
		<div className={cls.modal_overlay} onClick={onClose}>
			<div className={cls.modal_content} onClick={e => e.stopPropagation()}>
				<div className={cls.modal_header}>
					<h2>{title}</h2>
					<button onClick={onClose} className={cls.close_button}>
						&times;
					</button>
				</div>
				<div className={cls.modal_body}>{children}</div>
				<div className={cls.modal_footer}>
					<button onClick={onClose} className={cls.cancel_button}>
						Закрыть
					</button>
					{onSubmit && (
						<button onClick={onSubmit} className={cls.submit_button}>
							Добавить
						</button>
					)}
				</div>
			</div>
		</div>,
		document.body
	)
}
