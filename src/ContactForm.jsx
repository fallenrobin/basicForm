import React, { useState } from 'react';
import { useCounter } from './Counter/CounterContext';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import {Box} from '@mui/joy';

function ContactForm() {
  const { count } = useCounter();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const subjects = ['Support', 'Feedback', 'Other'];

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

const validateForm = () => {
    const tempErrors = {};
    for (const key in formData) {
      if (!formData[key]) {
        tempErrors[key] = 'This field is required';
      }
    }
    return tempErrors;
};

const handleSubmit = e => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      const output = {
        ...formData,
        currentCount: `Current count is ${count}`,
      };
      console.log(JSON.stringify(output));
    }
};


 const clearForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      subject: '',
      message: ''
    });
};


  return (
    <form onSubmit={handleSubmit} noValidate>
      <TextField
        required
        fullWidth
        label='First Name'
        variant='outlined'
        margin='normal'
        name='firstName'
        value={formData.firstName}
        onChange={handleInputChange}
        error={!!errors.firstName}
        helperText={errors.firstName}
      />
      <TextField
        required
        fullWidth
        label='Last Name'
        variant='outlined'
        margin='normal'
        name='lastName'
        value={formData.lastName}
        onChange={handleInputChange}
        error={!!errors.lastName}
        helperText={errors.lastName}
      />
      <TextField
        required
        fullWidth
        label='Phone Number'
        variant='outlined'
        margin='normal'
        name='phoneNumber'
        value={formData.phoneNumber}
        onChange={handleInputChange}
        error={!!errors.phoneNumber}
        helperText={errors.phoneNumber}
      />
      <TextField
        required
        fullWidth
        label='Email'
        variant='outlined'
        margin='normal'
        name='email'
        value={formData.email}
        onChange={handleInputChange}
        error={!!errors.email}
        helperText={errors.email}
      />
      <FormControl fullWidth variant='outlined' margin='normal'>
        <InputLabel>Subject</InputLabel>
        <Select
          required
          name='subject'
          value={formData.subject}
          onChange={handleInputChange}
          label='Subject' //hm no asterisk for required here 
          error={!!errors.subject}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          {subjects.map(subject => (
            <MenuItem key={subject} value={subject}>
              {subject}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        required
        fullWidth
        label='Message'
        variant='outlined'
        margin='normal'
        multiline
        rows={4}
        name='message'
        value={formData.message}
        onChange={handleInputChange}
        error={!!errors.message}
        helperText={errors.message}
      />
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Button
        type='submit'
        variant='contained'
        color='primary'
        style={{ marginTop: '16px' }}
      >
        Submit
      </Button>
      <Button
        variant='text'
        color='primary'
        style={{ marginTop: '16px' }}
        onClick={clearForm}
      >
        Clear form
      </Button>
      </Box>
    </form>
  );
}

export default ContactForm;
