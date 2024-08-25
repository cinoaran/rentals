

const Tooltip = ({ message, position, children }) => {
  if (!message || !children) return null;


  return (
    <div className='group relative flex items-center'>
      {children}
      <span className={`absolute flex items-center justify-center left-[40%] min-w-[max-content] max-w-[200px] md:translate-x-[-50%] translate-x-[-80%] top-11 scale-0 transition-all rounded bg-blue-600  p-5 text-xs shadow-md shadow-slate-800  text-white group-hover:scale-100 z-50 overflow-visible`}>
        <div
          id='arrow'
          className={`invisible absolute h-2 w-2 bg-inherit top-[-4px] md:left-[50%] left-[80%] before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']`}
          data='data-popper-arrow'
        ></div>
        {message}
      </span>
    </div >
  );
};

export default Tooltip;
