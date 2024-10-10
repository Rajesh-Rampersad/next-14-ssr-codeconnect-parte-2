export const Heading = ({ children, theme }) => {
    return (
      <h1 className='dark'>
        <span
          className={` ${
            theme === 'dark' ? 'dark:text-white' : 'text-gray-800'
          }`}
        >
          {children}
        </span>
      </h1>
    );
  };