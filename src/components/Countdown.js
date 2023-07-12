
import styles from './Countdown.module.css'

const Countdown = (props) => {
    return (
        <div className={styles.info}>
            <div className={styles.text}>
                <p><span>{props.date.year}</span> years</p>
            </div>
            <div className={styles.text}>
                <p><span>{props.date.month}</span> months</p>
            </div>
            <div className={styles.text}>
                <p><span>{props.date.day}</span> days</p>
            </div>
        </div>
    )
}

export default Countdown