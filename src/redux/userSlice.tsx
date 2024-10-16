import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface ClientResentResponse {
  subject: string;
  company_estimate_id: string;
  client_icon: string;
  full_name: string;
  status: string;
  status_key: string;
  status_id: number;
}

export interface EstPendingApprovalResult {
  company_estimate_id: string;
  client_icon: string;
  full_name: string;
  submitted: string;
  expires: string;
  amount: string;
}

export interface WinLostGraphData {
  current_win_count: number;
  current_lost_count: number;
  previous_win_count: number;
  previous_lost_count: number;
  current_win_amount: string;
  current_lost_amount: number;
  previous_win_amount: string;
  previous_lost_amount: string;
  current_total_amount: number;
  previous_total_amount: number;
  current_total_count: number;
  previous_total_count: number;
}

// Define the new state interface
export interface CounterState {
  clientResentResponse: ClientResentResponse[] | null;
  estPendingApprovalResult: EstPendingApprovalResult[] | null;
  winLostGraphData: WinLostGraphData | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: CounterState = {
  clientResentResponse: null,
  estPendingApprovalResult: null,
  winLostGraphData: null,
  loading: false,
  error: "",
}

// Fetch data from the new API link
export const getUsers = createAsyncThunk("user", async () => {
  return fetch("https://raw.githubusercontent.com/Dev-Ashwin-V/json-data/refs/heads/main/fetchlink.1")
    .then(res => res.json())
    .then(data => data.data);  // Adjust to get to the data field
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.clientResentResponse = action.payload.clientResentResponse;
        state.estPendingApprovalResult = action.payload.estPendingApprovalResult;
        state.winLostGraphData = action.payload.winLostGraphData;
      })
      .addCase(getUsers.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
})

export default userSlice.reducer;
