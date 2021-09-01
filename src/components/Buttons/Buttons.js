export const BlueButton = ({ children, link, className, ...otherProps }) => {
  return (
    <a {...otherProps} className={`btn btn-primary ${className}`} href={link}>
      {children}
    </a>
  );
};
