import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Col, Row } from '../../components/Row';
import { SecondaryBlue } from '../../config/Color';

const TeamCard = ({ data }) => {
  return (
    <Col className="col-lg-4 vertical-gap">
      <Row className="text-center-tab">
        <Col className="col-lg-4 no-hgaps">
          <img style={Styles.image} src={data.image} alt={data.name} />
        </Col>
        <Col className="col-lg-8">
          <h4 style={Styles.name}>{data.name}</h4>
          <h4 style={Styles.title}>{data.title}</h4>
          <div style={Styles.row}>
            {data.github.lenghth ? (
              <FaGithub
                size={20}
                color="#3C4858"
                style={{ ...Styles.icon, marginLeft: '0' }}
              />
            ) : null}
            {data.linkedin.lenghth ? (
              <FaLinkedinIn size={20} color="#3C4858" style={Styles.icon} />
            ) : null}
            {data.facebook.lenghth ? (
              <FaFacebookF size={20} color="#3C4858" style={Styles.icon} />
            ) : null}
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default TeamCard;

const Styles = {
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
  },
  icon: { margin: '0 0.45rem', cursor: 'pointer' },
  image: { width: '100px', height: '100px', borderRadius: '50%' },
  name: {
    fontSize: '1.25rem',
    color: SecondaryBlue,
    fontWeight: 700,
  },
  title: {
    fontSize: '1.1rem',
    color: '#3C4858',
    margin: '0.25rem 0 0.75rem',
    fontWeight: 400,
  },
};
