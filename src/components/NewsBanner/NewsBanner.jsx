import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import Image from '../Image/Image';
import styles from './styles.module.css';

function NewsBanner({item}) {
  return (
  <div>
    <Image image={item.image}/>
    <h3>{item.title}</h3>
    <p>{formatTimeAgo(item.published)} by {item.author}</p>
  </div>
  )
}

export default NewsBanner 