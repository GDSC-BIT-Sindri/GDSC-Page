import { Col, Row } from '../../components/Row';
import Section from '../../components/Section';

import Image from '../../assets/images/home-teams.jpg';
import { IconHead, Para } from '../../components/Texts';
import { FaFire } from 'react-icons/fa';
import { PrimaryBlue, White } from '../../config/Color';
import { FontSize } from '../../config/FontSize';

const HomeTeam = () => {
  return (
    <Section>
      <Row>
        <Col className="col-lg-6 z-push-back">
          <div>
            <img width="100%" src={Image} alt="GDSC BITS" />
          </div>
        </Col>
        <Col className="col-lg-6">
          <IconHead icon={<FaFire color={White} size={24} />} text="The Team" />
          <div className="vertical-gap">
            <Para>
              These are the amazing bunch of people who make the community what
              it is. Who are the Backbone of Developer Student Club, BITS and
              ensure that we can forge ahead #WhateverItTakes! <br /> <br />
              They take the time out from their daily grind to give back to the
              members and empower them to become bigger (Metaphorically). And
              Better.
            </Para>
            <div style={{ margin: '0.75rem 0 0.25rem' }}>
              <a style={styles.blueText} href="/teams">
                Meet the team
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Section>
  );
};

export default HomeTeam;

const styles = {
  blueText: {
    color: PrimaryBlue,
    fontWeight: 700,
    fontSize: FontSize.Normal,
  },
};
