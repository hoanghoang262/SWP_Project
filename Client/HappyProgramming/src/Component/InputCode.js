import React, { useState, useRef } from 'react';
import { Box } from '@mui/material';
const InputCode = ({length, onComplete}) => {
  const [code, setCode] = useState([...Array(length)].map(() => ''));
  const inputs = useRef([]);

  const processInput = (e, slot) => {
    const num = e.target.value;
    if (/[^0-9]/.test(num)) return;
    const newCode = [...code];
    newCode[slot] = num;
    setCode(newCode);
    if (slot !== length - 1) {
      inputs.current[slot + 1].focus();
    }
    if (newCode.every((num) => num !== '')) {
      onComplete(newCode.join(''));
    }
  };

  const onKeyUp = (e, slot) => {
    if (e.keyCode === 8 && !code[slot] && slot !== 0) {
      const newCode = [...code];
      newCode[slot - 1] = '';
      setCode(newCode);
      inputs.current[slot - 1].focus();
    }
  };

  return (
    <Box display="flex" spacing={2} justifyContent="space-between">
      {code.map((num, index) => (
        <Box
          component="input"
          sx={{
            backgroundColor: '#EAF3FA',
            maxWidth: '55px',
            border: 0,
            borderRadius: '5px',
            boxSizing: 'border-box',
            height: '55px',
            outline: 'none',
            padding: '21px',
            fontSize: '23px',
            fontWeight: 600,
            color: 'grey.500',
          }}
          key={index}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={num}
          autoFocus={!code[0].length && index === 0}
          onChange={(e) => processInput(e, index)}
          onKeyUp={(e) => onKeyUp(e, index)}
          ref={(ref) => inputs.current.push(ref)}
        />
      ))}
    </Box>
  );
};

export default InputCode;
