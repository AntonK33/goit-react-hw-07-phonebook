import React from 'react';
import { InputForm } from './InputForm/InputForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUrl } from 'redux/operations';
import { getError, getLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchUrl());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <InputForm />
      <Filter />
      {isLoading && <b>Reqwest in process...</b>}
      {error && <b>Failed reqwest </b>}
      <ContactList />
    </div>
  );
};
