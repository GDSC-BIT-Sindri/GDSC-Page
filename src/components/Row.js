export const Row = ({ children, className = '', ...otherProps }) => {
  return (
    <div {...otherProps} className={`row ${className}`}>
      {children}
    </div>
  );
};

export const Col = ({ children, className = '', ...otherProps }) => {
  return (
    <div {...otherProps} className={`col ${className}`}>
      {children}
    </div>
  );
};
