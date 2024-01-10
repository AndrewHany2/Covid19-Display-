import React, { useState } from 'react'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface DateRangeSelectorProps {
  handleDateRangeChange: (dates: { start: Date | null, end: Date | null }) => void
}

const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({ handleDateRangeChange }) => {
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  const handleDatesChange = (dates: [Date, Date]): void => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
    handleDateRangeChange({ start, end })
  }

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={handleDatesChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
    </div>
  )
}

export default DateRangeSelector
