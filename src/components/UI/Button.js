import styles from './Button.module.css'
import icon from '../assets/icon-arrow.svg'

const Button = (props) => {
	return (
		<button className={`${styles.button} ${props.className}`}>
			<img src={icon} className={styles.arrow} alt=''/>
		</button>
	)
}

export default Button
