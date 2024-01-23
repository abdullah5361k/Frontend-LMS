import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";

const initialState = {
    courseData: []
}

export const getAllCourses = createAsyncThunk("/courses/get", async () => {
    try {
        const res = axiosInstance.get("");
        toast.promise(res, {
            loading: "Loading courses...",
            success: "Courses loaded successfully",
            error: "failed to get the courses"
        })
        return (await res).data
    } catch (error) {
        toast.error(error?.data?.message)
    }
})


const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCourses.fulfilled, (state, action) => {
            if (action.payload) {
                state.courseData = [...action.payload]
            }
        })
    }
})

export default courseSlice.reducer;