import { create } from 'zustand'

export const useTipsStore = create((set) => ({
    tips: {},
    numTips: 1,
    addTip: (key: string, val: string) => set((state: any) => ({ tips: { ...state.tips, [key]: val } })),
    increaseTips: () => set((state: any) => ({ numTips: state.numTips + 1 })),
    decreaseTips: () => set((state: any) => ({ numTips: state.numTips - 1 })),
    removeTip: () => set({ bears: 0 }),
}));

export const useTravelImages = create((set) => ({
    images: [],
    addImage: (image: File,) => set((state: any) => ({ tips: [...state.images, image] })),
}));