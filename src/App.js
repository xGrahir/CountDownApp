import Wrapper from './components/UI/Wrapper'
import Inputs from './components/Inputs'
import Countdown from './components/Countdown'
import { useState, useEffect } from 'react'

function App() {
	let date = {
		day: '--',
		month: '--',
		year: '--',
	}

	const [currentCount, changeCount] = useState(date)

  useEffect(() => {
      // Get your data after refresh
      const currentDate = localStorage.getItem('data')
      let parsedDate = JSON.parse(currentDate)
      if (currentDate) {
        changeCount(parsedDate)
      }
  }, [])

	const getDateHandler = obj => {
		date = { ...obj }
		const currentDate = new Date()
    let currentYear = currentDate.getFullYear()
    let currentMonth = currentDate.getMonth()
    let currentDay = currentDate.getDate()

    if(currentDate.getMonth() < date.month) {
      currentYear -= 1
      currentMonth += 13
    }


    let day = Math.abs(currentDay - date.day)
    let month = Math.abs(currentMonth - date.month)
    let year = Math.abs(currentYear - date.year)

    if(month === 12) {
      year += 1
      month = 0
    }

    let count = {
      day: day,
      month: month,
      year: year
    }

    // parsing to JSON to use in future
    let json = JSON.stringify(count);

    localStorage.setItem('data', json)

    // Shows on site
		changeCount(count)
	}

	return (
		<Wrapper>
			<Inputs getDate={getDateHandler}></Inputs>
			<Countdown date={currentCount}></Countdown>
		</Wrapper>
	)
}

export default App
