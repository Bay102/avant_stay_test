import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FormatDate, InputLabel } from '../Styles';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { useAppProvider } from '../Providers/hookExports';

export const Period = () => {
  const [calendar, setCalendar] = useState(false);
  const [startDate, setStartDate] = useState<Date | null | undefined>(null);
  const [formattedStartDate, setFormattedStartDate] = useState<string>('');
  const [formattedEndDate, setFormattedEndDate] = useState<string>('');
  const [endDate, setEndDate] = useState<Date | null | undefined>(null);

  const { updateUrlParams } = useAppProvider();

  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (start && end) {
      const formattedStart = format(start, 'yyyy-MM-dd');
      const formattedEnd = format(end, 'yyyy-MM-dd');
      console.log(formattedStart, formattedEnd);
      setFormattedStartDate(formattedStart);
      setFormattedEndDate(formattedEnd);
      updateUrlParams('period', formattedStart + formattedEnd, null);
      setCalendar(false);
    }
  };

  return (
    <InputLabel width="25%">
      When
      {!startDate ? (
        <FormatDate
          onClick={() => (calendar ? setCalendar(false) : setCalendar(true))}
        >
          Select...
        </FormatDate>
      ) : (
        <FormatDate
          onClick={() => (calendar ? setCalendar(false) : setCalendar(true))}
        >{`${formattedStartDate} | ${formattedEndDate}`}</FormatDate>
      )}
      {calendar && (
        <div>
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
          />
        </div>
      )}
    </InputLabel>
  );
};
