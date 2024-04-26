import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';

interface IEntropyContext {
  entropy: number;
  setEntropy: Dispatch<SetStateAction<number>>;
}

const EntropyContext = createContext<IEntropyContext>({
  entropy: 0,
  setEntropy: () => { },
});

export default EntropyContext;
