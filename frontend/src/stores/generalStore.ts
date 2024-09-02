import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface GeneralState {
    isLoginOpen: boolean;
    isPropertyModalOpen: boolean;
    isAddTenantModalOpen: boolean;
    isUpdateTenantModalOpen: boolean;
    isJustRegistered: boolean;
}

export interface GeneralActions {
    setLoginIsOpen: (isOpen: boolean) => void;
    setIsPropertyModalOpen: (isOpen: boolean) => void;
    setIsAddTenantModalOpen: (isOpen: boolean) => void;
    setIsUpdateTenantModalOpen: (isOpen: boolean) => void;
    setIsJustRegistered: (isOpen: boolean) => void;
}

export const useGeneralStore = create<GeneralState& GeneralActions>()(
    devtools(
        persist(
            (set) => (
                {
                    isLoginOpen: false,
                    isPropertyModalOpen: false,
                    isAddTenantModalOpen: false,
                    isUpdateTenantModalOpen: false,
                    isJustRegistered: false,
                    setLoginIsOpen: (isOpen: boolean) => set({ isLoginOpen: isOpen }),
                    setIsPropertyModalOpen: (isOpen: boolean) => set({ isPropertyModalOpen: isOpen }),
                    setIsAddTenantModalOpen: (isOpen: boolean) => set({ isAddTenantModalOpen: isOpen }),
                    setIsUpdateTenantModalOpen: (isOpen: boolean) => set({ isUpdateTenantModalOpen: isOpen }),
                    setIsJustRegistered: (isOpen: boolean) => set({ isJustRegistered: isOpen })
                }
            ),
            {
                name: "general-store"
            }
        )
    )
)