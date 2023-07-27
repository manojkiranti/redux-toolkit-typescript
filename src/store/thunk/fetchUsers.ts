import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch', async (payload) => {
    console.log(payload);
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data;
});

export { fetchUsers };