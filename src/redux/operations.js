import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://64456a09914c816083ce416d.mockapi.io/contacts";

export const fetchUrl = createAsyncThunk("contact/fetchAll", async (_, thunkAPI) => {
        try {
            const response = await axios.get("/tasks");
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
     });

export const addContacts = createAsyncThunk("contact/addContacts", async ({ name, number }, thunkAPI) => {
    try {
        const response = await axios.post("/tasks", { name, number });
        return response.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
    
});

export const deleteContact = createAsyncThunk("contact/deleteContacts", async (contactId, thunkAPI) => {
      try {
        const response =  await axios.delete(`/tasks/${contactId}`);
        return response.data;
    }
    catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});