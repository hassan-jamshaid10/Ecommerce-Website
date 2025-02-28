// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const API_BASE_URL = "http://localhost:5000/api/auth"; // Adjust your API base URL

// // Async thunks for authentication actions
// export const loginUser = createAsyncThunk("auth/login", async (credentials, { rejectWithValue }) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/login`, credentials);
//     return response.data; // Assuming response contains token
//   } catch (error) {
//     return rejectWithValue(error.response?.data || "Login failed");
//   }
// });

// export const signupUser = createAsyncThunk("auth/signup", async (userData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${API_BASE_URL}/signup`, userData);
//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || "Signup failed");
//     }
//   });

// export const forgotPassword = createAsyncThunk("auth/forgotPassword", async (email, { rejectWithValue }) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/forgot-password`, { email });
//     return response.data;
//   } catch (error) {
//     return rejectWithValue(error.response?.data || "Forgot password request failed");
//   }
// });

// export const resetPassword = createAsyncThunk("auth/resetPassword", async (resetData, { rejectWithValue }) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/reset-password`, resetData);
//     return response.data;
//   } catch (error) {
//     return rejectWithValue(error.response?.data || "Reset password failed");
//   }
// });

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: null,
//     token: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.token = action.payload.token;
//         state.user = action.payload.user;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(signupUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(signupUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//       })
//       .addCase(signupUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(forgotPassword.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(forgotPassword.fulfilled, (state) => {
//         state.loading = false;
//       })
//       .addCase(forgotPassword.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(resetPassword.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(resetPassword.fulfilled, (state) => {
//         state.loading = false;
//       })
//       .addCase(resetPassword.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/auth"; // Adjust your API base URL

// Async thunks for authentication actions
export const loginUser = createAsyncThunk("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    return response.data; // Assuming response contains token
  } catch (error) {
    return rejectWithValue(error.response?.data || "Login failed");
  }
});

export const signupUser = createAsyncThunk("auth/signup", async (userData, { rejectWithValue }) => {
  try {
    // Adjusted to match the expected API payload structure
    const payload = {
      username: userData.username,
      email: userData.email,
      phone: userData.phone,
      password: userData.password,
    };
    
    const response = await axios.post(`${API_BASE_URL}/signup`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Signup failed");
  }
});

export const forgotPassword = createAsyncThunk("auth/forgotPassword", async (email, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/forgot-password`, { email });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || "Forgot password request failed");
  }
});

export const resetPassword = createAsyncThunk("auth/resetPassword", async (resetData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/reset-password`, resetData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || "Reset password failed");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Signup
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Forgot Password
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Reset Password
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
