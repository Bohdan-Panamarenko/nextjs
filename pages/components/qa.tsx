import styles from '../../styles/qa.module.css';

function Qa(props: { heading: string, text: string }) {
  return (
    <section className={styles.qa}>
      <h3 className={styles.qa_heading}>{props.heading}</h3>
      <div className={styles.qa_line}></div>
      <p className={styles.qa_text}>{props.text}</p>
    </section>
  );
}

export default Qa;