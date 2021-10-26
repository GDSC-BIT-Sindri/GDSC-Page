import { Col, Row } from '../../components/Row';
import Section from '../../components/Section';
import { H3, Para } from '../../components/Texts';

import Image from '../../assets/images/sindri-logo.png';
import { college } from '../../components/Data/socials';
import { SecondaryBlue } from '../../config/Color';

const HomeInstitute = () => {
  return (
    <Section>
      <Row>
        <Col className="col-lg-6">
          <div className="grid-center">
            <img src={Image} alt="BIT Sindri" />
          </div>
        </Col>
        <Col className="col-lg-6 vgaps-tab-sm" style={{alignSelf: 'center'}}>
          <H3>
            <a href={college} style={{ color: SecondaryBlue }}>
              BIT, Sindri
            </a>
          </H3>
          <Para className="vertical-gap" style={{ margin: '1rem 0 .5rem' }}>
            BIT Sindhri is affiliated to Jharkhand University of Technology
            (JUT), Hazaribag. The institute offers UG, PG and doctoral courses
            in engineering stream. All the courses are approved by All India
            Council of Technical Education (AICTE) and most of the undergraduate
            programmes are accredited by the National Board of Accreditation,
            New Delhi.
          </Para>
        </Col>
      </Row>
    </Section>
  );
};

export default HomeInstitute;
