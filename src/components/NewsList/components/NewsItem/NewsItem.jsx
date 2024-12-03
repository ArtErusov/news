import styles from "./styles.module.css";
import { formatTimeAgo } from "../../../../helpers/formatTimeAgo";

function NewsItem({ item }) {
  // Моя функция проверяет длину автора чтоб не было переноса на 2 строки
  // можно вынести в отдельную функцию
  const LengthCheck = (text) =>{
    if (text.length > 17) {
      return text.slice(0, 14) + ' ...';
  }
    return text;
  }
// ====================
console.log(LengthCheck(item.author))
  return (
    <li className={styles.item}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        {/* Сделать в функции второй аргумент который принемает длину и укоротить некоторые элементы h3 */}
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {LengthCheck(item.author)}
        </p>
      </div>
    </li>
  );
}

export default NewsItem;
