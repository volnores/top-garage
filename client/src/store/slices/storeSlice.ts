// store/slices/storeSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface IStoreSlice {
  isOpenModal: boolean;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: IStoreSlice = {
  isOpenModal: false,
  status: "idle",
  error: null,
};

// Асинхронное действие для отправки данных в Telegram
export const sendContactForm = createAsyncThunk(
  "store/sendContactForm",
  async (contactData: { name: string; phone: string; category: string }) => {
    const textMessage = `Имя: ${contactData.name}\nТелефон: ${contactData.phone}\nКатегория: ${contactData.category}`;

    const response = await axios.post(
      `https://api.telegram.org/bot${process.env.REACT_APP_TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.REACT_APP_TELEGRAM_CHAT_ID,
        text: textMessage,
      }
    );

    return response.data;
  }
);

export const index = createSlice({
  name: "store",
  initialState,
  reducers: {
    setIsOpenModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContactForm.pending, (state) => {
        state.status = "loading";
      })
      .addCase(sendContactForm.fulfilled, (state) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(sendContactForm.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Ошибка при отправке сообщения";
      });
  },
});

export const { setIsOpenModal } = index.actions;

export default index.reducer;
