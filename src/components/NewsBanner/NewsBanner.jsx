import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import styles from './styles.module.css';

function NewsBanner({item}) {
  return (
  <div>
    <h3>{item.title}</h3>
    <p>{formatTimeAgo(item.published)} by {item.author}</p>
  </div>
  )
}

export default NewsBanner 