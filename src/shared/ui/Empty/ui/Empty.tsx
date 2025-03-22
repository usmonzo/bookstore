import { FC, ReactNode } from 'react'
import { FaBook } from 'react-icons/fa'
import styles from './Empty.module.scss'

interface EmptyProps {
	reason?: string | ReactNode
}

const Empty: FC<EmptyProps> = ({
	reason = 'В книжной полке на данный момент пусто',
}: EmptyProps) => {
	return (
		<div className={styles.container}>
			<FaBook className={styles.icon} />
			<p className={styles.reason}>{reason}</p>
		</div>
	)
}

export default Empty
