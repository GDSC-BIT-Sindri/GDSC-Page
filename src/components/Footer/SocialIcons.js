import { PrimaryBlack } from '../../config/Color';

export const SocialIcons = ({ children, link }) => {
  return (
    <a
      style={{ color: PrimaryBlack }}
      href={link}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
};
