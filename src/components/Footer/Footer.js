import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaGooglePlusG,
} from 'react-icons/fa';
import { PrimaryBlack, TextBlue } from '../../config/Color';
import { FontSize } from '../../config/FontSize';
import { college, guidelines, hncc, mail, socials } from '../Data/socials';
import { Col, Row } from '../Row';
import { SocialIcons } from './SocialIcons';

import Image from '../../assets/images/Logo2.png';

const SIZE = 20;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Row>
          <Col
            style={{ paddingLeft: 0, margin: '0 0 0.75rem 0' }}
            className="align-row col-lg-4"
          >
            <h4 className="sm-font" style={styles.inTouch}>
              <b>Keep in Touch{'  '}</b>
            </h4>
            <div className="socials">
              <SocialIcons link={socials.facebook}>
                <FaFacebookF size={SIZE} />
              </SocialIcons>
              <SocialIcons link={socials.instagram}>
                <FaInstagram size={SIZE} />
              </SocialIcons>
              <SocialIcons link={socials.github}>
                <FaGithub size={SIZE} />
              </SocialIcons>
              <SocialIcons link={socials.linkedin}>
                <FaLinkedin size={SIZE} />
              </SocialIcons>
              <SocialIcons link={socials.email}>
                <FaGooglePlusG size={SIZE} />
              </SocialIcons>
            </div>
          </Col>
          <Col style={{ paddingLeft: 0 }} className="col-lg-4">
            <div className="share-socials">
              <a href={`mailto:${socials.email}`}>
                <span className="sm-font" style={styles.email}>
                  Email Us:
                  <b style={styles.emailText}>{socials.email}</b>
                </span>
              </a>
            </div>
          </Col>
        </Row>
      </div>
      <div className="container links__container">
        <Row>
          <Col className="col-lg-4">
            <div className="detail__box">
              <h3>About</h3>
              <div className="links">
                <a style={{ fontSize: '18px', fontWeight: 600 }} href="/">
                  About Us
                </a>
                <a href={hncc}>HnCC</a>
                <a href="/teams">Meet the team</a>
              </div>
            </div>
          </Col>
          <Col className="col-lg-4">
            <div className="detail__box">
              <h3>About BITS</h3>
              <div className="links">
                <a style={{ fontSize: '18px', fontWeight: 600 }} href={college}>
                  BIT Sindri
                </a>
              </div>
            </div>
          </Col>
          <Col className="col-lg-4">
            <div className="detail__box">
              <h3>Other Links</h3>
              <div className="links">
                <a href={mail}>Contact Us</a>
                <a href={mail}>Call for Sponsors</a>
                <a
                  style={{ fontSize: '18px', fontWeight: 600 }}
                  href={guidelines}
                >
                  Community Guidelines
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <hr />

      <div className="container disclaimer">
        <div className="row__space-between">
          <div>
            <img height="40px" src={Image} alt="DSC BITS" />
          </div>
          <div className="copyright">
            <p style={{ color: '#888' }}>
              © Copyright 2021 DSC BITS | Developed with{' '}
              <span style={{ color: 'red', fontSize: '1rem' }}>❤️</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const styles = {
  inTouch: {
    fontSize: FontSize.Header5,
    color: PrimaryBlack,
    textTransform: 'capitalize',
    fontWeight: '300',
    lineHeight: '24px',
  },
  email: {
    fontSize: FontSize.Normal,
    color: PrimaryBlack,
    fontWeight: 700,
  },
  emailText: { color: TextBlue, marginLeft: '0.5rem', cursor: 'pointer' },
};
