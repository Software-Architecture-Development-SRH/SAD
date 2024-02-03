import React, { createContext, useContext, useReducer } from 'react';

const FileContext = createContext();

export const FileProvider = ({ children }) => {
  const initialState = {
    cvFiles: [],
    certificateFiles: [],
    coverLetterFiles: [],
  };

  const fileReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_FILES':
        return {
          ...state,
          [action.category]: [...state[action.category], ...action.files],
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fileReducer, initialState);

  return (
    <FileContext.Provider value={{ state, dispatch }}>
      {children}
    </FileContext.Provider>
  );
};

export const useFileContext = () => {
  return useContext(FileContext);
};
export default FileContext;