import React, {useState} from 'react';
import { Button, TextField, Grid, Snackbar, Alert } from '@mui/material';
import { Box } from '@mui/joy';
import { useCounter } from './CounterContext';

function Counter() {
  const {
    increment,
    decrement,
    count,
    handleCountChange,
    zeroCounter,
    openAlert,
    handleCloseAlert
  } = useCounter();


  return (
    <Grid>
      <Grid>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button
            variant='contained'
            name='increment'
            disabled={count > 9}
            onClick={increment}
          >
            Moar!
          </Button>
          <Button
            variant='contained'
            name='decrement'
            disabled={count < 1}
            onClick={decrement}
          >
            Less!
          </Button>
        </Box>
        <Button
          variant='text'
          name='reset'
          disabled={count === 0}
          onClick={zeroCounter}
        >
          reset to zero
        </Button>
      </Grid>

      <TextField
        label='Set count between 0-10'
        value={count}
        fullWidth
        type='number'
        InputProps={{ inputProps: { min: 0, max: 10 } }}
        variant='standard'
        onChange={handleCountChange}
      />
      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseAlert} severity='warning' sx={{ width: '100%' }}>
          Oops! Number entered is outside the range of 0-10. Count has been reset to zero.
        </Alert>
      </Snackbar>
    </Grid>
  );
}

export default Counter;
