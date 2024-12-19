import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Интерфейс для состояния
interface IStoreSlice {
  isOpenModal: boolean;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  name: string; // Состояние для имени
  phone: string; // Состояние для телефона
  category: string; // Состояние для категории
  selectedCategory: string;
  search: string;
}

const initialState: IStoreSlice = {
  isOpenModal: false,
  status: 'idle',
  error: null,
  name: '', // Инициализация пустым значением
  phone: '', // Инициализация пустым значением
  category: '', // Инициализация пустым значением
  selectedCategory: 'Все',
  search: '',
};

// Асинхронное действие для отправки данных в Telegram
export const sendContactForm = createAsyncThunk(
  'store/sendContactForm',
  async (contactData: { name: string; phone: string; category: string }) => {
    const textMessage = `Имя: ${contactData.name}\nТелефон: ${contactData.phone}\nКатегория: ${contactData.category}`;

    const response = await axios.post(
      `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_API_TOKEN}/sendMessage`,
      {
        chat_id: import.meta.env.VITE_TELEGRAM_CHAT_ID,
        text: textMessage,
      },
    );

    return response.data;
  },
);

const index = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setIsOpenModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenModal = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setSearchByWord: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    // Новые редьюсеры для обновления состояния формы
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    resetForm: (state) => {
      state.name = '';
      state.phone = '';
      state.category = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContactForm.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(sendContactForm.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
        // Очищаем форму при успешной отправке
        state.name = '';
        state.phone = '';
        state.category = '';
      })
      .addCase(sendContactForm.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Ошибка при отправке сообщения';
      });
  },
});

export const {
  setIsOpenModal,
  setName,
  setPhone,
  setCategory,
  resetForm,
  setSelectedCategory,
  setSearchByWord,
} = index.actions;

export default index.reducer;
