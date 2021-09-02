import { BlueButton } from './Buttons/Buttons';
import { H3, Para } from './Texts';

const HomeCard = ({ button, link, title, text, image }) => {
  return (
    <div className="card">
      <div id={image} className="card__image"></div>
      <H3 className="hgaps-sm">{title}</H3>
      <div className="card__detail hgaps-sm vertical-gap-sm">
        <Para>{text}</Para>
      </div>
      <div className="card__detail hgaps-sm">
        <BlueButton link={link}>{button}</BlueButton>
      </div>
    </div>
  );
};

export default HomeCard;
