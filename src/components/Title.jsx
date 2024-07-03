function Title({ children, className }) {
  return (
    <h1
      className={`text-stroke-sm text-6xl md:text-7xl text-center font-dream uppercase ${className}`}
    >
      {children}
    </h1>
  );
}

export default Title;
