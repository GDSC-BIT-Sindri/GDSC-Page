import {
  DiscordButton,
  TeleGramButton,
} from '../../components/Buttons/Buttons';
import { Col, Row } from '../../components/Row';
import Section from '../../components/Section';
import { H2, Para } from '../../components/Texts';

const HomeChannels = () => {
  return (
    <Section>
      <H2>Join Conversation</H2>
      <Row>
        <Col className="col-lg-6 no-hgaps">
          <Para style={{ paddingRight: '20px' }} className="vertical-gap">
            Join our Telegram Group to know more about the Activities, Sessions
            and other fun stuff.
          </Para>
          <TeleGramButton />
        </Col>
        <Col className="col-lg-6 no-hgaps">
          <Para style={{ paddingRight: '20px' }} className="vertical-gap">
            Join our Discord Server to know more about the Activities, Sessions
            and other fun stuff.
          </Para>
          <DiscordButton />
        </Col>
      </Row>
    </Section>
  );
};

export default HomeChannels;
