import { BlueButton } from '../../components/Buttons/Buttons';
import { mail } from '../../components/Data/socials';
import { Col, Row } from '../../components/Row';
import Section from '../../components/Section';
import { H1, H3, H4, Para } from '../../components/Texts';

import Image from '../../assets/images/event-banner.png';
import { EventsDetails } from '../../components/Data/EventDetails';
import { SecondaryBlue } from '../../config/Color';

const Events = () => {
  return (
    <main className="events">
      <Section>
        <Row>
          <Col className="col-lg-6">
            <H1>Events</H1>
            <div className="vertical-gap">
              <Para>
                Here at DSC BITS we put the fun in functions and events. Attend
                Study Jams/ Hackathons/ Developer Conferences to learn more
                about the latest technologies. Interested in being a Speaker at
                one of our events? Just drop us your Proposal.
              </Para>
              <BlueButton className="vertical-gap" link={mail}>
                Send Proposals
              </BlueButton>
            </div>
          </Col>
          <Col className="col-lg-6">
            <div>
              <img height="100%" width="100%" src={Image} alt="Events" />
            </div>
          </Col>
        </Row>

        <Section>
          <Row>
            {EventsDetails.length ? (
              EventsDetails.map((item, index) => {
                return (
                  <Col className="col-lg-4" key={index}>
                    <div className="card">
                      <div id={item.image} className="card__image" />
                      <div className="hgaps-sm">
                        <H4 style={{ color: SecondaryBlue }}>{item.title}</H4>
                        <h4 style={Styles.date}>{item.date}</h4>
                        <Para>{item.text}</Para>

                        <a
                          style={Styles.link}
                          className="vertical-gap-sm"
                          href={item.link}
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </Col>
                );
              })
            ) : (
              <div className="w-100 text-center">
                <H3>No Events Available</H3>
              </div>
            )}
          </Row>
        </Section>
      </Section>
    </main>
  );
};

export default Events;

const Styles = {
  link: {
    display: 'block',
    marginBottom: '0.25rem',
    color: '#06f',
    fontWeight: 700,
  },
  date: {
    color: SecondaryBlue,
    fontWeight: 400,
    margin: '0.75rem 0',
  },
};
