import { createContext, ReactNode, useState, useContext } from "react";

interface IMessageProviderProps {
  children: ReactNode;
}

type MessageContextType = {
  open: boolean;
  openInbox: () => void;
  closeInbox: () => void;
};

const MessageContext = createContext<MessageContextType | null>(null);

export const MessageProvider: React.FC<IMessageProviderProps> = ({
  children,
}) => {
  const initialIsOpen =
    localStorage.getItem("isWidgetOpen") === "true" || false;
  const [open, setOpen] = useState(initialIsOpen);

  const openInbox = () => {
    setOpen(true);
  };

  const closeInbox = () => {
    setOpen(false);
  };

  return (
    <MessageContext.Provider value={{ open, openInbox, closeInbox }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("useMessage must be used within a Provider");
  }
  return context;
};
