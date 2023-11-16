import PageSize from "./Property/PageSize/PageSize";
import Pages from "./Property/Pages/Pages";
import NumofPage from "./Property/NumofPage/NumofPage";
import NumperPage from "./Property/NumperPage/NumperPage";
import styles from "./PropertyPage.module.css";

const PropertyPage = () => {
  return (
    <main className={styles.content}>
      <h2 className={styles.chooseSize}>CHỌN KHỔ GIẤY</h2>
      <section className={styles.uploadArea}>
        <PageSize />
        <Pages />
        <NumofPage />
        <NumperPage />
      </section>
      <button className={styles.cancelButton}>
        <div className={styles.cancel}>HỦY</div>
      </button>
      <button className={styles.confirmButton}>
        <div className={styles.confirm}>XÁC NHẬN</div>
      </button>
    </main>
  );
};

export default PropertyPage;
