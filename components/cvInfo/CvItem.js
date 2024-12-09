import Card from '../ui/Card';
import classes from './CvItem.module.css';
import { useRouter } from 'next/router';

function CvItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.name);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <p>Email: {props.email}</p>
          <p>Phone: {props.phone}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default CvItem;
