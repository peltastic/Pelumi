const Background = ({ children }) => {
    return (
      <div className="bg-[#fff] w-full dark:bg-[#000] transition-all">{children}</div>
    );
  };
  
  export default Background;