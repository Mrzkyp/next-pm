import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
interface calenderProps {
  ValuePiece: ValuePiece;
}


export default function calender({ValuePiece} : calenderProps) {
  const [value, onChange] = useState<Value>(new Date());
  
  useEffect(() => {
    onChange(ValuePiece)
  },[ValuePiece])

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}