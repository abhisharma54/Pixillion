function Container({ children, className }) {
  return (
    <div className={`max-w-[1280px] w-full h-full ${className}`}>
      {children}
    </div>
  );
}

export default Container;
