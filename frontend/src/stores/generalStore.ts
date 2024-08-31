import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface GeneralState {
    isLoginOpen: boolean;
    isPropertyModalOpen: boolean;
}

export interface GeneralActions {
    setLoginIsOpen: (isOpen: boolean) => void;
    setIsPropertyModalOpen: (isOpen: boolean) => void;
}

export const useGeneralStore = create<GeneralState& GeneralActions>()(
    devtools(
        persist(
            (set) => (
                {
                    isLoginOpen: false,
                    isPropertyModalOpen: false,
                    setLoginIsOpen: (isOpen: boolean) => set({ isLoginOpen: isOpen }),
                    setIsPropertyModalOpen: (isOpen: boolean) => set({ isPropertyModalOpen: isOpen }),
                }
            ),
            {
                name: "general-store"
            }
        )
    )
)