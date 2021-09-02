import { Col, Row } from '../../components/Row';
import Section from '../../components/Section';
import { H2, H3, Para } from '../../components/Texts';
import { PrimaryBlue, SecondaryBlue } from '../../config/Color';

import Image from '../../assets/images/hncc-logo.png';
import { hncc, mail } from '../../components/Data/socials';

const HomePartner = () => {
  return (
    <Section>
      <H2>Partners</H2>
      <Row>
        <Col className="col-lg-6 no-hgaps">
          <div className="vertical-gap">
            <Para>
              Thank you to our Partners for their support towards the community.
              If you want to be showcased through DSC BITS, contact{' '}
              <a href={mail} style={Styles.link}>
                Here
              </a>{' '}
              for Sponsorship details.
            </Para>
          </div>
        </Col>
        <Col className="col-lg-6 text-center">
          <img
            className="vertical-gap-sm"
            width="100px"
            src={Image}
            alt="HnCC"
          />
          <H3>
            <a style={{ color: SecondaryBlue }} href={hncc}>
              HnCC - Hackathon and Coding Club
            </a>
          </H3>
        </Col>
      </Row>
    </Section>
  );
};

export default HomePartner;

const Styles = {
  link: {
    color: PrimaryBlue,
  },
};
