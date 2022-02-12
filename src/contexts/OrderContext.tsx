import { createContext, useState } from "react";

export const OrderState = createContext({
  isOnline: false,
  setIsOnline: (isOnline: boolean) => {},
});

const OrderContext: React.FC = ({ children }) => {
  const orders = [
    {
      title: "",
      type: "",
      location: "",
      customer: "",
      price: "",
    },
    {
      title: "",
      type: "",
      location: "",
      customer: "",
      price: "",
    },
  ];

  const [isOnline, setIsOnline] = useState(false);
  return (
    <OrderState.Provider
      value={{
        isOnline,
        setIsOnline,
      }}
    >
      {children}
    </OrderState.Provider>
  );
};

export default OrderContext;
