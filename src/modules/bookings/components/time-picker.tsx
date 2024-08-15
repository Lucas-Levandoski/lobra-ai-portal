import { Button } from 'Common';
import { twMerge } from 'tailwind-merge';

type props = {
  times?: string[];
  selectedTime?: number;
  onSelectTime?: (index: number) => void;
}

export function TimePicker({ times, onSelectTime = () => {}, selectedTime }: props) {

  return (
    <div className={twMerge('flex flex-col gap-4 overflow-x-hidden transition-all w-fit', times && times.length > 0 ? 'max-w-300' : 'max-w-0')}>
      <h2>Selecione o Horário</h2>
      <div className="grid grid-cols-4 gap-2 max-h-[300px] overflow-y-auto">
        {
          times && 
          times.map((time, i) => <Button 
            onClick={() => onSelectTime(i)} 
            variant="text" 
            className={twMerge('bg-slate-200 h-8', i === selectedTime && 'bg-blue-600 text-white')} 
            key={time}
          >{time}</Button>) 
        }
        {
          times && 
          times.length < 28 && 
          new Array(28 - (times?.length ?? 0)).fill('-').map(
            (numb, i) => <Button  variant="text" className="bg-slate-200 h-8" key={numb+i} disabled>{numb}</Button>
          )
        }
        {
          times &&
          times.length > 28 &&
          new Array(4 - times.length % 4).fill('-').map(
            (numb, i) => <Button  variant="text" className="bg-slate-200 h-8" key={numb+i} disabled>{numb}</Button>
          )
        }
      </div>
    </div>
  );
}