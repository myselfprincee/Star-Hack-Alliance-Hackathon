// src/stores/counter-store.js
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Create the Zustand store
const useStatesStore = create(persist(
    (set) => ({
        history: [],
        noOfQuestions: 10,
        question: [],
        renderQuestion: false,
        selectQuestion: true,
        chosenAnswer: [],
        colory: 'bg-white',
        CheckedAnswer: false,
        resultPage: false,
        score: 0,

        //nasa mission page states
        alphabet: 'A',
        setAlphabet: (newAlphabet) => set({ alphabet: newAlphabet }),

        //nasa project and specific project states
        projectId: 0,
        setProjectId : (id) => set({ projectId: id}),

        //knowledge page states
        numArr : [],
        setNumArr: (arr) => set((state) => ({ numArr: [...state.numArr, arr] })),
        clearNumArr : () => set(() => ({ numArr: [] })),

        //navbar show modal states
        isClicked: false,
        setIsClicked: () => set((state) => ({ isClicked: !state.isClicked })),


        // Methods to update state
        setCheckedAnswer: () => set(() => ({ CheckedAnswer: true })),
        setSelectQuestion: () => set(() => ({ selectQuestion: true })),
        showRenderedQuestion: () => set(() => ({ renderQuestion: true })),
        showResultPage: () => set(() => ({ resultPage: true })),
        addToHistory: (item) => set((state) => ({
            history: [...state.history, item]
        })),
    }),
    {
        name: 'state-storage', // Name of the item in storage
        storage: createJSONStorage(() => localStorage),
        skipHydration: false,
    }
));

export default useStatesStore;