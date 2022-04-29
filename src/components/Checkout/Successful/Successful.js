import { Button, Paper, Typography } from '@material-ui/core';
import { Home } from '@material-ui/icons';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from '../../../components';
import useStyles from './styles';

const Successful = memo(({ handleReset, isFinished }) => {
  const classes = useStyles();

  return (
    <>
      {!isFinished ? (
        <Spinner />
      ) : (
        <Paper variant="outlined" className={classes.paper}>
          <Typography variant="h6" gutterBottom>
            Спасибо за покупку!
          </Typography>
          <Button
            component={Link}
            to="/"
            size="large"
            type="button"
            variant="contained"
            color="primary"
            aria-label="Go homepage"
            startIcon={<Home />}
            onClick={handleReset}
          >
            Вернуться на главную
          </Button>
        </Paper>
      )}
    </>
  );
});

export default Successful;
