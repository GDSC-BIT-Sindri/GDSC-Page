import { Col, Row } from '../../components/Row';
import Section from '../../components/Section';
import { H1, H2, IconHead, Para } from '../../components/Texts';
import { AiOutlineDingding } from 'react-icons/ai';
import { PrimaryBlue, White } from '../../config/Color';
import { BlueButton } from '../../components/Buttons/Buttons';
import Image from '../../assets/images/home-about.webp';
import {
  FaDiscord,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaTelegramPlane,
} from 'react-icons/fa';

const ICON_SIZE = 20;

const HomeAbout = () => {
  return (
    <Section>
      <div style={{ margin: '1rem 0', marginLeft: '15px' }}>
        <H1>About The Program</H1>
      </div>
      <Row className="vertical-gap">
        <Col className="col-lg-6">
          <IconHead
            icon={<AiOutlineDingding color={White} size={28} />}
            text={'What we do ?'}
          />
          <div className="vertical-gap">
            <Para style={{ margin: '0.5rem 0 0.85rem' }}>
              Google collaborates with university students who are passionate
              about growing developer communities. <br /> <br />
              Developer Student Club powered by Google Developers is an
              initiative to grow their knowledge on developer technologies and
              more through peer to peer workshops and events, and gain relevant
              industry experience.
            </Para>

            <BlueButton>Join Us</BlueButton>

            <div style={{ margin: '0.75rem 0 0.25rem' }}>
              <a
                style={styles.blueText}
                href="https://developers.google.com/programs/dsc/"
              >
                Learn more about the program
              </a>
            </div>
          </div>
        </Col>
        <Col className="col-lg-6">
          <div style={styles.gridCenter}>
            <img width="100%" src={Image} alt="" />
          </div>
        </Col>
      </Row>

      <Row className="vertical-gap-lg">
        <Col className="col-lg-6">
          <div style={styles.column}>
            <H2>What DSC BITS does?</H2>

            <div className="vertical-gap-sm">
              <Para>
                Developer Student Club HIT is inspired by the Google Developers'
                Family. <br />
                The motive is to create a local ecosystem of Developers in and
                around the Campus. And having fun doing it.
              </Para>
            </div>

            <div className="vertical-gap" style={styles.nowrap}>
              <CircleIcons link="/">
                <FaFacebookF size={ICON_SIZE} />
              </CircleIcons>
              <CircleIcons link="/">
                <FaInstagram size={ICON_SIZE} />
              </CircleIcons>
              <CircleIcons link="/">
                <FaTelegramPlane size={ICON_SIZE} />
              </CircleIcons>
              <CircleIcons link="/">
                <FaDiscord size={ICON_SIZE} />
              </CircleIcons>
              <CircleIcons link="/">
                <FaGithub size={ICON_SIZE} />
              </CircleIcons>
            </div>
          </div>
        </Col>
        <Col className="col-lg-6"></Col>
      </Row>
    </Section>
  );
};

export default HomeAbout;

const CircleIcons = ({ children, link }) => {
  return (
    <a style={styles.circle} href={link}>
      {children}
    </a>
  );
};
const styles = {
  gridCenter: {
    height: '100%',
    width: '100%',
    display: 'grid',
    placeItems: 'center',
  },
  blueText: {
    color: PrimaryBlue,
    fontWeight: 700,
    fontSize: '16px',
  },
  nowrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
    width: '100%',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  circle: {
    width: '55px',
    height: '55px',
    borderRadius: '50%',
    backgroundColor: PrimaryBlue,
    marginRight: '0.85rem',
    color: White,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
