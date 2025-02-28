import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Goal {
  text: string;
  time: string;
}

interface InitialState {
  goals: Goal[];
}

const initialState: InitialState = {
  goals: [],
};

export const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    addGoal: (state, action: PayloadAction<Goal>) => {
      state.goals.push(action.payload);
    },
    deleteGoal: (state, action: PayloadAction<string>) => {
      state.goals = state.goals.filter((goal) => goal.time != action.payload);
    },
  },
});

export const { addGoal, deleteGoal } = goalsSlice.actions;

export default goalsSlice.reducer;
