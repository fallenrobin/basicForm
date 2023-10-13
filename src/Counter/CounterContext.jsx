import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);
  const [openAlert, setOpenAlert] = useState(false);

  const increment = () => {
    if (count <= 9) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count === 0) {
    } else {
      setCount(count - 1);
    }

    return;
  };

  const zeroCounter = () => {
    setCount(0);
  };

  const handleCountChange = e => {
    let value = parseInt(e.target.value, 10);

    if (e.target.value === "") {
    setCount(""); // Allow empty string so users can delete the default 0
    return;
  }

    if (isNaN(value) || value < 0 || value > 10) {
      value = 0;
      setOpenAlert(true);
    }
    setCount(value);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <CounterContext.Provider
      value={{
        count,
        increment,
        decrement,
        handleCountChange,
        setCount,
        zeroCounter,
        openAlert,
        handleCloseAlert,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter needs to be in a CounterProvider');
  }
  return context;
}
