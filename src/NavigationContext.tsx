import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';

interface INavigationContext {
  page: string;
  setPage: Dispatch<SetStateAction<string>>;
}

const NavigationContext = createContext<INavigationContext>({
  page: "",
  setPage: () => { },
});

export default NavigationContext;
