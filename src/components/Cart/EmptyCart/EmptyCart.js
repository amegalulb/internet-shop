import { Button, Paper, Typography } from '@material-ui/core';
import NextWeekIcon from '@material-ui/icons/NextWeek';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const EmptyCart = () => {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.paper}>
      <Typography variant="h6" component="p">
          У вас нет товаров в корзине!
      </Typography>
      <Button
        component={Link}
        to="/"
        size="large"
        type="button"
        variant="contained"
        color="primary"
        startIcon={<NextWeekIcon />}
        aria-label="Go to products page"
        className={classes.link}
      >
        Начните добавлять!
      </Button>
    </Paper>
  );
};

export default EmptyCart;
