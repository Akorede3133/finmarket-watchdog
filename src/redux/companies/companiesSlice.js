import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  companies: [],
  filteredCompanies: [],
  loading: false,
  error: '',
};
const API_KEY = 'c0405893fd96337e82d58e3ee28f1c63';
export const getActiveCompanies = createAsyncThunk('companies/getCompanies', async () => {
  try {
    const response = await fetch(`https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=${API_KEY}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
});
const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getActiveCompanies.pending, (state) => {
        state.loading = true;
      })
      .addCase(getActiveCompanies.fulfilled, (state, action) => {
        state.loading = false;
        state.companies = action.payload;
      })
      .addCase(getActiveCompanies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default companiesSlice.reducer;