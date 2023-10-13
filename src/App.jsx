import React from 'react';
import { Box, Grid, Link, Typography } from '@mui/material';
import Counter from './Counter/Counter';
import { CounterProvider } from './Counter/CounterContext';  
import ContactForm from './ContactForm'


export default function App() {
  return (
    <CounterProvider>
    <Grid container spacing={4}>
      <Grid item xs={6} sx={{ backgroundColor: '#EFEFEF' }}>
        {/* Place your component(s) here */}
        <Counter/>
        <ContactForm/>
      </Grid>
      <Grid item xs={6} container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="body2">(Break up work into individual components where appropriate - MUI is not required but available as desired. Use TypeScript where applicable.)</Typography>
          <Box display="flex" flexDirection="column" gap={2} mt={2}>
          <Link href="https://mui.com/material-ui/getting-started/" target="_blank">MUI Component Library Documentation</Link>
          <Link href="https://www.react-hook-form.com/api/" target="_blank">react-hook-form Documentation</Link>
          <Link href="https://react.i18next.com/" target="_blank">react-i18n Documentation</Link>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">1. Create a Counter</Typography>
          <Typography variant="body2">- Increment, Decrement and Set Total Count Functionality</Typography>
          <Typography variant="body2">- "Set Total Count" input should only accept numerical input.</Typography>
          <Typography variant="body2">- "Set Total Count" shows an error when empty and user tried to submit.</Typography>
          <Typography variant="body2">- Max value is 10.</Typography>
          <Typography variant="body2">- Minimum value is 0.</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">2. Update Counter Functionality/State to be Globally Managed</Typography>
          <Typography variant="body2">- Any component in our application should be able to reference the current count and the increment, decrement, and set count methods.</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">3. Create a Contact Form</Typography>
          <Typography variant="body2">- Should capture First Name, Last Name, Phone Number, E-mail, Subject and Message fields.</Typography>
          <Typography variant="body2">- All fields are required.</Typography>
          <Typography variant="body2">- All required fields should have an *, denoting its required.</Typography>
          <Typography variant="body2">- Subject field is a dropdown with the following options: Support, Feedback, Other.</Typography>
          <Typography variant="body2">- Subject field is does not have an option selected by default.</Typography>
          <Typography variant="body2">- On submit, the information is logged to the console as a JSON object which includes the current count from Global State.</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">4. Add Internationalization to the Application</Typography>
          <Typography variant="body2">- Extend our application to utilize the react-i18n package.</Typography>
          <Typography variant="body2">- Only need to add English support.</Typography>
        </Grid>
      </Grid>
    </Grid>
    </CounterProvider>
  );
}
