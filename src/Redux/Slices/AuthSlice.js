import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";

const initialState = {
    isLoggedIn: localStorage.getItem("isLoggedIn") || false,
    role: localStorage.getItem("role") || "",
    data: localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : {}
}

export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
    try {
        console.log(data);
        const res = axiosInstance.post("/user/register", data);
        toast.promise(res, {
            loading: "Wait creating your account",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create account"
        })
        return (await res).data;
    } catch (error) {
        console.log("Error ", error);
        toast.error(error?.response?.data?.message);
    }
})


export const login = createAsyncThunk("/auth/login", async (data) => {
    try {
        const res = axiosInstance.post("/user/login", data);
        toast.promise(res, {
            loading: "Wait! authentication in process",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to login"
        })
        return (await res).data;
    } catch (error) {
        console.log(error);
        console.log("ERROr ", error?.response?.data);
        toast.error(error?.response?.data?.message);
    }
})

export const logout = createAsyncThunk("/auth/logout", async () => {
    try {
        const res = axiosInstance.get("/user/logout");
        toast.promise(res, {
            loading: "Wait!",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to logout"
        })
        return (await res).data
    } catch (error) {
        console.log("ERRORLogoutsss ", error?.response?.data);
        toast.error(error?.response?.data?.message);
    }
})

export const updateProfile = createAsyncThunk("/user/update/profile", async (id, data) => {
    try {
        const res = axiosInstance.get(`user/update/${id}`, data);
        toast.promise(res, {
            loading: "Wait! profile update in progress!",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to update profile"
        })
        return (await res).data
    } catch (error) {
        console.log("ERRORLogoutsss ", error?.response?.data);
        toast.error(error?.response?.data?.message);
    }
})

function updateState(state, action) {
    localStorage.setItem("data", JSON.stringify(action?.payload?.user));
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("role", action?.payload?.user?.role);
    state.isLoggedIn = true;
    state.data = action?.payload?.user;
    state.role = action?.payload?.user?.role;
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            updateState(state, action)
        })
            .addCase(createAccount.fulfilled, (state, action) => {
                updateState(state, action)
            })
            .addCase(logout.fulfilled, (state) => {
                localStorage.clear();
                state.isLoggedIn = false;
                state.data = {};
                state.role = "";
            })
    }
})

export const { } = authSlice.actions;
export default authSlice.reducer;