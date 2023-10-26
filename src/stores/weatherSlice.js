import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  latitude: null,
  longitude: null,
  weather: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setLatitude: (state, action) => {
      state.latitude = action.payload;
    },
    setLongitude: (state, action) => {
      state.longitude = action.payload;
    },
    setWeather: (state, action) => {
      state.weather = action.payload;
    },
  },
});

export const { setLatitude, setLongitude, setWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
