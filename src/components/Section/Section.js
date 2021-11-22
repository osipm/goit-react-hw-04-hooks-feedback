import PropTypes from 'prop-types';
import s from './section.module.css';
const Section = ({ title, children }) => {
  return (
    <section className={s.section}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
