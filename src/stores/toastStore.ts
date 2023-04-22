import { Icon } from "@types";
import { create } from "zustand";
import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";

interface Content {
  id?: string;
  icon?: {
    icon: Icon;
    color: string;
  };
  content?: string | JSX.Element;
}

interface StoreState {
  show: boolean;
  setShow: (show: boolean) => void;
  content: Content;
  setContent: (content: Content) => void;
  setSuccess: (message?: string) => void;
  setFailure: (message?: string, is500?: boolean) => void;
}

export const useToastStore = create<StoreState>()((set) => ({
  show: false,
  setShow: (show) => set(() => ({ show })),
  content: {},
  setContent: (content) => set(() => ({ content })),
  setSuccess: (message = "Successfull saved!") =>
    set(() => ({
      content: {
        icon: { icon: CheckCircledIcon, color: "text-emerald-400" },
        content: message,
      },
      show: true,
    })),
  setFailure: (message = "Failed to save!", is500 = false) =>
    set(() => ({
      content: {
        icon: {
          icon: is500 ? CrossCircledIcon : ExclamationTriangleIcon,
          color: is500 ? "text-red-400" : "text-orange-400",
        },
        content: message,
      },
      show: true,
    })),
}));
