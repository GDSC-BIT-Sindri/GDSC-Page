import { FaDiscord, FaTelegramPlane } from 'react-icons/fa';
import { socials } from '../Data/socials';

export const BlueButton = ({ children, link, className, ...otherProps }) => {
  return (
    <a {...otherProps} className={`btn btn-primary ${className}`} href={link}>
      {children}
    </a>
  );
};

export const TeleGramButton = ({ ...otherProps }) => {
  return (
    <a {...otherProps} className="btn btn__telegram" href={socials.telegram}>
      Join us on <FaTelegramPlane style={{ margin: '0 0.35rem' }} size={18} />{' '}
      Telegram
    </a>
  );
};

export const DiscordButton = ({ ...otherProps }) => {
  return (
    <a {...otherProps} className="btn btn__discord" href={socials.discord}>
      Join us on <FaDiscord style={{ margin: '0 0.35rem' }} size={18} /> Discord
    </a>
  );
};
