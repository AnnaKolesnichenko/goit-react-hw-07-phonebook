import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, postContact, deleteContact } from 'services/services';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, thunkApi) => {
    try {
      console.log('smth')
      const contacts = await fetchContacts();
      console.log(contacts)
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      console.log('1')
      const contacts = await postContact(contact);
      console.log('2')
      return contacts;
    } catch (error) {
      console.log('3')
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactById = createAsyncThunk(
  'contacts/deleteContactById',
  async (contactId, thunkApi) => {
    try {
      console.log('4')
      const contacts = await deleteContact(contactId);
      console.log('5')
      return contacts;
      
    } catch (error) {
      console.log('6')
      return thunkApi.rejectWithValue(error => console.log(error.message));
    }
  }
);
