import { useState } from 'react';

function Tooltip({ children, text }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className='relative'
    >
      {children}
      {showTooltip && (
        <div className='absolute bg-slate-200 border-2 border-zinc-800 p-1 text-[10px] font-jetBrainsRegular translate-y-1 translate-x-[-25%]'>
          {text}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
