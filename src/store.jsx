import { configureStore } from "@reduxjs/toolkit";
import { absents } from "./application";

export default configureStore({
  reducer: {
    absents
  }
});
