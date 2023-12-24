import { useState } from 'react';
import { FormattedDate, InputLabel } from '../Styles';
import { format } from 'date-fns';
import { useAppProvider } from '../Providers/hookExports';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
      setFormattedStartDate(formattedStart);
      setFormattedEndDate(formattedEnd);
      updateUrlParams('period', formattedStart + formattedEnd, null);
      setCalendar(false);
    }
  };

  const showCalendar = () => {
    calendar ? setCalendar(false) : setCalendar(true);
  };

  return (
    <InputLabel width="25%">
      When
      {!startDate ? (
        <FormattedDate onClick={() => showCalendar()}>Select...</FormattedDate>
      ) : (
        <FormattedDate
          onClick={() => showCalendar()}
        >{`${formattedStartDate} | ${formattedEndDate}`}</FormattedDate>
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
