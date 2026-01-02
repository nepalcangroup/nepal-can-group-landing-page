"use client";

import React from "react";

import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider
      value={{
        name: "AppContext Test",
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
