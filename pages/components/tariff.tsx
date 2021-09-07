import styles from '../../styles/tariff.module.css';

function Tariff(props: {price: string, heading: string, text: string, href: string}) {
  return (
    <div className={styles.tariff}>
      <span className={styles.tariff_price}>{props.price}</span>
      <h3 className={styles.tariff_heading}>{props.heading}</h3>
      <p className={styles.tariff_text}>{props.text}</p>
      <a href={props.href} className={"blue-button " + styles.tariff_button} >GET IT NOW</a>
    </div>
  );
}

export default Tariff;