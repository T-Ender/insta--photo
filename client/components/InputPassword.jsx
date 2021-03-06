import React, { useState } from 'react';
import {
  FormControl,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  useBoolean,
} from '@chakra-ui/react';

const InputPassword = React.forwardRef(({ placeholder }, passwordRef) => {
  const [hasInput, setHasInput] = useState(false);
  const [show, setShow] = useBoolean(false);
  function handlePasswordInput(event) {
    setHasInput(event.target.value.length);
  }

  return (
    <FormControl>
      <InputGroup>
        <Input
          placeholder={placeholder || 'Password'}
          type={show ? 'text' : 'password'}
          ref={passwordRef}
          onInput={event => handlePasswordInput(event)}
        />
        {hasInput ? (
          <InputRightElement width="4.5rem">
            <Button
              variant="ghost"
              h="1.75rem"
              size="sm"
              onClick={() => setShow.toggle()}
            >
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        ) : (
          <></>
        )}
      </InputGroup>
    </FormControl>
  );
});

export default InputPassword;
