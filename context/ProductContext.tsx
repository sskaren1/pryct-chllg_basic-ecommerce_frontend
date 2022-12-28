// import react
import { FC } from "react";
import { createContext, useContext, useState } from "react";
// import interfaces
import { propsSearch, User } from './../components/interfaces/interfaces';

// export const ProductContext  = createContext({});


interface Props {
    children: React.ReactElement;
    // propsSearch: propsSearch;
}
interface ContextProps {
  isMenuOpen: boolean;
  product: [];

  // Methods
  toggleSideMenu: () => void;
}
export const ProductContext = createContext({} as ContextProps );

// const ProductContextDefaultValues: propsSearch = {
//   product: "",
//   setProduct: ""
// };
// export const ProductContext = createContext<propsSearch>(ProductContextDefaultValues);


export const ProductProvider: FC<Props> = ({ children }: Props)=> {
  const [product, setProduct] = useState([]);
  // const [product, setProduct] = useState<Array<User>>([]);

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

