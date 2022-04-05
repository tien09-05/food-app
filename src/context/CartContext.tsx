import React, { createContext, ReactNode, useState } from "react";

interface IProps {
  children: ReactNode;
}
interface ICartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

interface ICartContext {
  cart: ICartItem[];
  setCart: React.Dispatch<React.SetStateAction<ICartItem[]>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addToCart: Function;
  increQuantity: Function;
  decreQuantity: Function;
  deleteItem: Function;
}

const CartContextDefault: ICartContext = {
  cart: [],
  setCart: () => null,
  isOpen: false,
  setIsOpen: () => null,
  addToCart: () => null,
  increQuantity: () => null,
  decreQuantity: () => null,
  deleteItem: () => null,
};

export const CartContext = createContext<ICartContext>(CartContextDefault);

const CartContextProvider: React.FC<IProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState<ICartItem[]>([]);

  const addToCart = (food: ICartItem, quantity: number) => {
    const index = cart.findIndex((item) => item.id === food.id);
    if (index !== -1) {
      const newCart = cart.map((item) => {
        if (item.id === food.id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }
        return item;
      });
      setCart([...newCart]);
    } else {
      setCart([
        ...cart,
        {
          ...food,
          quantity,
        },
      ]);
    }
  };

  const increQuantity = (id: string, quantity: number) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + quantity,
        };
      }
      return item;
    });
    setCart([...newCart]);
  };

  const decreQuantity = (id: string) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        const newQuantity = Math.max(item.quantity - 1, 1);
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });
    setCart([...newCart]);
  };

  const deleteItem = (id: string) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };
  const value = {
    cart,
    setCart,
    isOpen,
    setIsOpen,
    addToCart,
    increQuantity,
    decreQuantity,
    deleteItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
