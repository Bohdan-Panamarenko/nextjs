import Image from 'next/image';
import styles from '../../styles/partner.module.css';

function Partner(props: { img: StaticImageData, name: string, href: string }) {
  return (
  <div className={styles.partner}>
    <div  className={styles.partner_image}>
      <Image src={props.img} alt="Partner logo" />
    </div>
    <div className={styles.partner_text}>
      <h3 className={styles.partner_heading}>{props.name}</h3>
      <a href={"http://" + props.href}  rel="noreferrer" target="_blank" 
      className={styles.partner_link}>{props.href}</a>
    </div>
  </div>
  );
}

export default Partner;