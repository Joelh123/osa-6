import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    changeNotification (state, action) {
      return action.payload
    },
    clearNotification() {
      return null
    }
  }
})

export const { changeNotification, clearNotification } = notificationSlice.actions

export const setNotification = (content, time) => {
  return async dispatch => {
    dispatch(changeNotification(content))

    setTimeout(() => {
      dispatch(clearNotification())
    }, time * 1000)
  }
}

export default notificationSlice.reducer