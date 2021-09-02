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
import { join, socials } from '../../components/Data/socials';

const ICON_SIZE = 20;

const COLORS = [
  { text: 'rgba(228, 180, 25, 1)', bg: 'rgba(228, 180, 25, 0.25)' },
  { text: 'rgb(12, 80, 182)', bg: 'rgba(12, 80, 182, 0.25)' },
  { text: 'rgb(223, 77, 19)', bg: 'rgba(223, 77, 19, 0.25)' },
  { text: 'rgb(11, 184, 83)', bg: 'rgba(11, 184, 83, 0.25)' },
];

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

            <BlueButton link={join}>Join Us</BlueButton>

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

      <Row className="vertical-gap">
        <Col className="col-lg-6">
          <div style={styles.column}>
            <H2>What DSC BITS does?</H2>

            <div className="vertical-gap-sm">
              <Para>
                Developer Student Club BITS is inspired by the Google
                Developers' Family.
                <br />
                The motive is to create a local ecosystem of Developers in and
                around the Campus. And having fun doing it.
              </Para>
            </div>

            <div className="vertical-gap" style={styles.nowrap}>
              <CircleIcons link={socials.facebook}>
                <FaFacebookF size={ICON_SIZE} />
              </CircleIcons>
              <CircleIcons link={socials.instagram}>
                <FaInstagram size={ICON_SIZE} />
              </CircleIcons>
              <CircleIcons link={socials.telegram}>
                <FaTelegramPlane size={ICON_SIZE} />
              </CircleIcons>
              <CircleIcons link={socials.discord}>
                <FaDiscord size={ICON_SIZE} />
              </CircleIcons>
              <CircleIcons link={socials.github}>
                <FaGithub size={ICON_SIZE} />
              </CircleIcons>
            </div>
          </div>
        </Col>
        <Col className="col-lg-6">
          <div style={styles.column}>
            <Row className="vertical-gap vgaps-tab-sm">
              <Col className="col-lg-6 vgaps-tab-sm no-hgaps-tab">
                <div>
                  <ColoredBox
                    color={{ text: COLORS[0].text, bg: COLORS[0].bg }}
                    title="Seminars"
                  />
                  <Para>
                    Get updated with the latest news and announcements.
                  </Para>
                </div>
              </Col>
              <Col className="col-lg-6 vgaps-tab-sm no-hgaps-tab">
                <div>
                  <ColoredBox
                    color={{ text: COLORS[1].text, bg: COLORS[1].bg }}
                    title="Study Jams"
                  />
                  <Para>Hands-on experience with the community members.</Para>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="col-lg-6 vgaps-tab-sm no-hgaps-tab">
                <div>
                  <ColoredBox
                    color={{ text: COLORS[2].text, bg: COLORS[2].bg }}
                    title="Projects"
                  />
                  <Para>
                    Projects with a social impact that help a lot of people.
                  </Para>
                </div>
              </Col>
              <Col className="col-lg-6 vgaps-tab-sm no-hgaps-tab">
                <div>
                  <ColoredBox
                    color={{ text: COLORS[3].text, bg: COLORS[3].bg }}
                    title="Hackathons"
                  />
                  <Para>Dream. Explore. Wonder. Build it Together.</Para>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
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

const ColoredBox = ({ color = { text: '', bg: '' }, title }) => {
  return (
    <div
      className="round-text-box"
      style={{
        color: color.text,
        backgroundColor: color.bg,
        width: '55%',
        marginBottom: '0.65rem',
      }}
    >
      {title}
    </div>
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
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: PrimaryBlue,
    marginRight: '0.85rem',
    color: White,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coloredBox: {
    padding: '0.65rem 0.25rem',
    borderRadius: '8px',
  },
};
