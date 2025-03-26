import { create } from "zustand";
import { CheckoutSteps } from "@/types/checkout-steps";
import { Dispatch, SetStateAction } from "react";
import { Form, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Tipos
type States = {
  name: string;
  address: {
    street: string;
    number: string;
    complement?: string | undefined;
    district: string;
    city: string;
    state: string;
  };
};

type Actions = {
  setName: (name: States["name"]) => void;
  setAddress: (address: States["address"]) => void;
};

// Dados iniciais
const initialData: States = {
  name: "",
  address: {
    street: "",
    number: "",
    complement: "",
    district: "",
    city: "",
    state: "",
  },
};

// Zustand Store
export const useCheckoutStore = create<States & Actions>((set) => ({
  ...initialData,
  setName: (name) => set((state) => ({ ...state, name })),
  setAddress: (address) => set((state) => ({ ...state, address })),
}));