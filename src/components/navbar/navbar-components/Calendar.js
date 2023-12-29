import React, { useState } from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import '../../../styles/css/DateRangePickerStyle.css';
import {Box} from "@mui/material";
export default function DateCalendarValue() {

    const [dateRange, setDateRange] = useState({
        startDate: null,
        endDate: null,
    });
    const [focusedInput, setFocusedInput] = useState(null);

    const handleDateChange = ({ startDate, endDate }) => {
        setDateRange({ startDate, endDate });
    };
    const datePickerStyle = {
        position: "relative",
        right: 0, // Ajusta este valor para alinear a la derecha
    };

    return (
        <Box sx={{display:'flex',justifyContent:'center', paddingRight:'350px'}}>


        <DateRangePicker
            startDate={dateRange.startDate}
            startDateId="your_unique_start_date_id"
            endDate={dateRange.endDate}
            endDateId="your_unique_end_date_id"
            onDatesChange={handleDateChange}
            focusedInput={focusedInput}
            onFocusChange={(focused) => setFocusedInput(focused)}
            keepOpenOnDateSelect={true}
            style={datePickerStyle}

        />
        </Box>
    );
}



