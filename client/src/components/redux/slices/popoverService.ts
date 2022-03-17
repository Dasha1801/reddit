import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPopoverState {
  popoverService: {
    text: string;
    isShow: boolean;
  };
}

const initialState: IPopoverState = {
  popoverService: {
    text: '',
    isShow: false,
  },
};

type TPayload = {
  text: string;
  isShow: boolean;
};

const popoverServiceSlice = createSlice({
  name: 'popoverService',
  initialState,
  reducers: {
    showPopoverService: (state, { payload }: PayloadAction<TPayload>) => {
      state.popoverService = payload;
    },

    hidePopoverService: (state) => {
      state.popoverService = { text: '', isShow: false };
    },
  },
});

export const popoverService_reducer = popoverServiceSlice.reducer;
export const { showPopoverService, hidePopoverService } = popoverServiceSlice.actions;