import { Col, Row } from '../../components/Row';
import Section from '../../components/Section';
import { H1, Para } from '../../components/Texts';

import Image from '../../assets/images/team.png';
import { TeamDetails } from '../../components/Data/TeamDetails';
import TeamCard from './TeamCard';

const Team = () => {
  return (
    <main className="team">
      <Section>
        <Row>
          <Col className="col-lg-6">
            <H1>Team</H1>
            <div className="vertical-gap">
              <Para>
                One log creates a small fire, adequate to warm you up, add just
                a few more pieces to blast an immense bonfire, large enough to
                warm up your entire circle; needless to say that individuality
                counts but teamwork dynamites. At{' '}
                <a style={Styles.link} href="/">
                  DSC BITS
                </a>{' '}
                celebrate teamwork and attribute the success of DSC to the
                wonderful individuals who put untiring efforts for it.
              </Para>
            </div>
          </Col>
          <Col className="col-lg-6">
            <div>
              <img height="100%" width="100%" src={Image} alt="Events" />
            </div>
          </Col>
        </Row>
      </Section>
      <Section>
        <Row>
          {TeamDetails.length
            ? TeamDetails.map((item, index) => {
                return <TeamCard data={item} key={index} />;
              })
            : null}
        </Row>
      </Section>
    </main>
  );
};

export default Team;

const Styles = {
  link: { color: 'rgb(0,101,202)' },
};
