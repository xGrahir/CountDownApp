import Button from './UI/Button'
import { Fragment, useState } from 'react'
import styles from './Inputs.module.css'

const Inputs = (props) => {
	const [choosenDay, changeDay] = useState('')
	const [choosenMonth, changeMonth] = useState('')
	const [choosenYear, changeYear] = useState('')

	const [errorInfoDay, dayError] = useState(false)
	const [errorInfoMonth, monthError] = useState(false)
	const [errorInfoYear, yearError] = useState(false)

	const [errorYearEmpty, yearEmpty] = useState(false)

	let year = new Date().getFullYear()

	const dayHandler = e => {
        changeDay('')
		dayError(false)
		if (e.target.value > 31 || e.target.value < 0) {
			dayError(true)
		} else {
			changeDay(e.target.value)
		}
	}

	const monthHandler = e => {
        changeMonth('')
		monthError(false)
		if (e.target.value > 12 || e.target.value < 0) {
			monthError(true)
		} else {
			changeMonth(e.target.value)
		}
	}

	const yearHandler = e => {
        changeYear('')
		yearEmpty(false)
		yearError(false)
		if (e.target.value > year) {
			yearError(true)
		} else {
			changeYear(e.target.value)
		}
	}

	const submitHandler = e => {
		e.preventDefault()

		if (!choosenDay) {
			dayError(true)
		}

		if (!choosenMonth) {
			monthError(true)
		}

		if (!choosenYear) {
			yearEmpty(true)
		}

		if (choosenDay && choosenMonth && choosenYear) {
			const date = {
				day: choosenDay,
				month: choosenMonth,
				year: choosenYear
			}

			props.getDate(date)
		}
	}

	return (
		<Fragment>
			<form action='' className={styles.form} onSubmit={submitHandler}>
				<div className={styles.inputs}>
					<div className={`${styles.input} ${errorInfoDay ? styles.error : ''}`}>
						<label htmlFor=''>Day</label>
						<input type='number' min='1' max='31' placeholder='DD' onChange={dayHandler}/>
						{errorInfoDay ? <p>Must be a valid day</p> : <p></p>}
					</div>
					<div className={`${styles.input} ${errorInfoMonth ? styles.error : ''}`}>
						<label htmlFor=''>Month</label>
						<input type='number' min='1' max='12' placeholder='MM' onChange={monthHandler} />
						{errorInfoMonth ? <p>Must be a valid month</p> : <p></p>}
					</div>
					<div className={`${styles.input} ${errorInfoYear ? styles.error : ''} ${errorYearEmpty ? styles.error: ''}`}>
						<label htmlFor=''>Year</label>
						<input type='number' min='1' max='2023' placeholder='YYYY' onChange={yearHandler} />
						{errorInfoYear ? <p>Year cannot be higher than {year} </p> : ""}
						{errorYearEmpty ? <p>Year cannot be empty</p> : ""}
					</div>
				</div>
				<div className={styles.actions}>
					<div className={styles.line}></div>
					<Button className={styles.btn}></Button>
				</div>
			</form>
		</Fragment>
	)
}

export default Inputs
