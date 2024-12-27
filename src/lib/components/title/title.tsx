import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import classes from './title.module.scss';

interface Props {
  title: string;
}

function Title({ title }: Props) {
  return (
    <h1 className={classes.title} data-testid="title">
      <Link to="/" className={classes.home}>
        <Home size={24} />
      </Link>
      {title}
     
    </h1>
  );
}

export default Title;
