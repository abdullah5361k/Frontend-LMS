import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";

const initialState = {
    courseData: []
}

export const getAllCourses = createAsyncThunk("/courses/get", async () => {
    try {
        const res = axiosInstance.get("/course/get");
        toast.promise(res, {
            loading: "Loading courses...",
            success: "Courses loaded successfully",
            error: "failed to get the courses"
        });
        return (await res).data
    } catch (error) {
        toast.error(error?.data?.message)
    }
});


export const createNewCourse = createAsyncThunk("/course/create", async () => {
    try {
        const formData = new FormData();
        formData.append("title", data?.title);
        formData.append("category", data?.category);
        formData.append("description", data?.description);
        formData.append("createdBy", data?.createdBy);
        formData.append("thumbnail", data?.thumbnail);
        const res = axiosInstance.post("/courses/create", formData);
        toast.promise(res, {
            loading: "Wait! ...",
            success: "Courses created successfully",
            error: "failed to create the course"
        });
        return (await res).data;
    } catch (error) {
        toast.error(error?.data?.message);
    }
})


const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCourses.fulfilled, (state, action) => {
            if (action.payload) {
                console.log(action.payload.courses);
                state.courseData = [...action.payload.courses]
            }
        })
    }
})

export default courseSlice.reducer;