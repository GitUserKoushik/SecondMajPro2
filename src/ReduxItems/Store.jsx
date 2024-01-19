import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import  Testimonial from "./TestimonialSlice";
import BlogSlice from "./BlogSlice";
import ServiceSlice from "./ServiceSlice";
import CourseSlice from "./CourseSlice";
import TeamSlice from "./TeamSlice";
import CommentSlice from "./CommentSlice";
import {ConSlice} from "./AuthSlice";


 export const Store = configureStore({
    reducer:{
        Auth: AuthSlice.reducer,
        Test: Testimonial.reducer,
        Blogss: BlogSlice.reducer,
        Serve : ServiceSlice.reducer,
        Course : CourseSlice.reducer,
        TeamMems: TeamSlice.reducer,
        CrtCmnt : CommentSlice.reducer,
        ConCre : ConSlice.reducer,
    },
});

// export default Store;
