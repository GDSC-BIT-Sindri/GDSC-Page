import Card from '../../components/Card';
import { HOME_TESTIMONIALS } from '../../components/Data/HomeDetails';
import { Col, Row } from '../../components/Row';
import Section from '../../components/Section';

function HomeTestimonials() {
  return (
    <Section>
      <Row>
        {HOME_TESTIMONIALS.map((item, index) => {
          return (
            <Col className="col-lg-4" key={index}>
              <Card
                title={item.title}
                text={item.text}
                button={item.button}
                link={item.link}
                image={item.image}
              />
            </Col>
          );
        })}
      </Row>
    </Section>
  );
}

export default HomeTestimonials;
