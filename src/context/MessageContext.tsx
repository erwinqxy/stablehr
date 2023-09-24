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
  const [open, setOpen] = useState(false);

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
