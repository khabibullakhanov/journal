import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reStudent } from "./Student";

const reducer = combineReducers({
  student: reStudent,
});

export const Store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});





















// const reducer = combineReducers({
//     reLoading,
// });

// export const Store = configureStore({
//     reducer,
//     devTools: process.env.NODE_ENV !== "production",
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: false,
//             immutableCheck: false,
//         }),
// });
// import { reLoading } from "./Loading";



// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import userReducer from "./userSlice"
// import { reLoading } from "./Loading";


// export default configureStore({
//     reducer: {
//         user: userReducer,
//         reLoading,

//     },
// });
