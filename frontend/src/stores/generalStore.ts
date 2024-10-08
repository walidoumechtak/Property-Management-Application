import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface GeneralState {
    isLoginOpen: boolean;
    isPropertyModalOpen: boolean;
    isAddTenantModalOpen: boolean;
    isUpdateTenantModalOpen: boolean;
    isJustRegistered: boolean;
    isPaymentsModalOpen: boolean;
    isAddPaymentModalOpen: boolean;
}

export interface GeneralActions {
    setLoginIsOpen: (isOpen: boolean) => void;
    setIsPropertyModalOpen: (isOpen: boolean) => void;
    setIsAddTenantModalOpen: (isOpen: boolean) => void;
    setIsUpdateTenantModalOpen: (isOpen: boolean) => void;
    setIsJustRegistered: (isOpen: boolean) => void;
    setIsPaymentsModalOpen: (isOpen: boolean) => void;
    setIsAddPaymentModalOpen: (isOpen: boolean) => void;
}

export const useGeneralStore = create<GeneralState& GeneralActions>()(
    devtools(
        persist(
            (set) => (
                {
                    isLoginOpen: false,
                    isPropertyModalOpen: false,
                    isAddTenantModalOpen: false,
                    isAddPaymentsModalOpen: false,
                    isUpdateTenantModalOpen: false,
                    isJustRegistered: false,
                    isPaymentsModalOpen: false,
                    isAddPaymentModalOpen: false,
                    setLoginIsOpen: (isOpen: boolean) => set({ isLoginOpen: isOpen }),
                    setIsPropertyModalOpen: (isOpen: boolean) => set({ isPropertyModalOpen: isOpen }),
                    setIsAddTenantModalOpen: (isOpen: boolean) => set({ isAddTenantModalOpen: isOpen }),
                    setIsUpdateTenantModalOpen: (isOpen: boolean) => set({ isUpdateTenantModalOpen: isOpen }),
                    setIsJustRegistered: (isOpen: boolean) => set({ isJustRegistered: isOpen }),
                    setIsPaymentsModalOpen: (isOpen: boolean) => set({ isPaymentsModalOpen: isOpen }),
                    setIsAddPaymentModalOpen: (isOpen: boolean) => set({ isAddPaymentModalOpen: isOpen }),
                }
            ),
            {
                name: "general-store"
            }
        )
    )
)