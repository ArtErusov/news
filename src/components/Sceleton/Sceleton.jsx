import styles from "./styles.module.css";

function Sceleton(count = 2, type = "banner") {
  return (
    <>
      {count !== 2 ? (
        <ul>
          {[...Array(count)].map((_, index) => (
            <li
              key={index}
              className={type === "banner" ? styles.banner : styles.item}
            ></li>
          ))}
        </ul>
      ) : (
        <ul>
          {[...Array(2)].map((_, index) => (
            <li
              key={index}
              className={type === "banner" ? styles.banner : styles.item}
            ></li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Sceleton;
