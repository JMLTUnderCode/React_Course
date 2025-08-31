import React from 'react';
import type { State, Action, FromLanguage, Language } from '../types.d';
import { AUTO_LANGUAGE } from '../constants';

const inicialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
};

function reducer(state: State, action: Action): State {
  const { type } = action;
  if (type === 'INTERCHANGE_LANGUAGES') {
    if (state.fromLanguage === AUTO_LANGUAGE) return state;
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
      fromText: state.result,
      result: ''
    };
  }

  if (type === 'SET_FROM_LANGUAGE') {
    if (state.fromLanguage === action.payload) return state;
    return {
      ...state,
      fromLanguage: action.payload,
      result: '',
      loading: state.fromText ? true : false
    };
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: action.payload,
      result: ''
    };
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: action.payload ? true : false,
      fromText: action.payload,
      result: ''
    };
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      result: action.payload
    };
  }

  return state;
};

export function useInitialState() {
    const [{
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading
  }, dispatch] = React.useReducer(reducer, inicialState);

  const interchangeLanguages = () => {
    dispatch({ type: 'INTERCHANGE_LANGUAGES' });
  };

  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type: 'SET_FROM_LANGUAGE', payload: payload });
  };

  const setToLanguage = (payload: Language) => {
    dispatch({ type: 'SET_TO_LANGUAGE', payload: payload });
  };

  const setFromText = (payload: string) => {
    dispatch({ type: 'SET_FROM_TEXT', payload: payload });
  };

  const setResult = (payload: string) => {
    dispatch({ type: 'SET_RESULT', payload: payload });
  };

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  }
}
