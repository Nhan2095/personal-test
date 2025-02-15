import styles from "./heroBanner.module.css";
import Mountains from "@/assets/images/Mountains.svg";
import Fishing from "@/assets/images/Fishing.svg";
import Crosshair from "@/assets/images/Crosshair.svg";

type Props = {
  banner_menu?: string[];
};

export default function HeroBanner({ banner_menu = [] }: Props) {
  if (!banner_menu.length) return null;

  return (
    <div className={styles["hero-banner"]}>
      <div className={styles["image-container"]}>
        <div className={styles["image-item"]}>
          <Mountains alt="Mountains" width={40} height={40} />
          <span className={styles["hover-text"]}>{banner_menu[0]}</span>
        </div>
        <div className={styles["image-item"]}>
          <Fishing alt="Fishing" width={40} height={40} />
          <span className={styles["hover-text"]}>{banner_menu[1]}</span>
        </div>
        <div className={styles["image-item"]}>
          <Crosshair alt="Crosshair" width={40} height={40} />
          <span className={styles["hover-text"]}>{banner_menu[2]}</span>
        </div>
      </div>
    </div>
  );
}
