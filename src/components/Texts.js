export const H1 = ({ children, className, ...otherProps }) => {
  return (
    <h1 {...otherProps} className={`heading1 ${className}`}>
      {children}
    </h1>
  );
};

export const H2 = ({ children, className, ...otherProps }) => {
  return (
    <h1 {...otherProps} className={`heading2 ${className}`}>
      {children}
    </h1>
  );
};

export const IconHead = ({ icon, text }) => {
  return (
    <div className="icon-header">
      <div className="icon-header__icon">
        <div className="icon-header__icon-circle">{icon}</div>
      </div>
      <div className="icon-header__text">{text}</div>
    </div>
  );
};

export const Para = ({ children, className, ...otherProps }) => {
  return (
    <p {...otherProps} className={`paragraph ${className}`}>
      {children}
    </p>
  );
};
