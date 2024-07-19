import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/fondohero.jpg" objectFit="cover" layout="fill" alt="Background Image" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet, nulla eu auctor egestas, nisl nisl vestibulum lorem, eu dictum lorem est at erat.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>LOREM IPSUM DOLOR SIT</h1>
          <p className={styles.text}>
            1234 Lorem St #567.
            <br /> Ipsum City, 12345
            <br /> (123) 456-7890
          </p>
          <p className={styles.text}>
            2345 Dolor Ave #890.
            <br /> Sit City, 67890
            <br /> (234) 567-8901
          </p>
          <p className={styles.text}>
            3456 Amet Blvd #234.
            <br /> Consectetur, 11223
            <br /> (345) 678-9012
          </p>
          <p className={styles.text}>
            4567 Adipiscing Rd #345.
            <br /> Elit City, 33445
            <br /> (456) 789-0123
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>LOREM IPSUM HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 9:00 AM – 10:00 PM
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 10:00 AM – 11:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
