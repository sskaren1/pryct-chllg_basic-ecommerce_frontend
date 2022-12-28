// import react hooks
import { useState, useEffect, FC } from 'react';
// import next
import Head from "next/head";
import Image from "next/image";
// import apollo client
import { useQuery, gql, useLazyQuery } from "@apollo/client";
// import images
import iconCompleteOrder from "./../public/images/icon_orden_completa.png";
import iconPlus from "./../public/images/icon_plus.png";
import cartBlue from "./../public/images/icon_carrito-azul.png";
// import styled components
import {
  PropsFlex,
  Main,
  Container,
  GridCol2,
  Box,
  GridCol3,
  FlexCol,
  Flex,
  BoxAuto,
} from "../components/ui/layout";
import { Input, ButtonCircle, Button } from "../components/ui/form";
import { Card } from "../components/ui/surfaces";
import { PropsTyph, Text, Span  } from "../components/ui/typography";
// import css modules
import styles from "./home.module.css";
// import components
import { FullScreenLoading } from "./../components/ui/FullScreenLoading";
import { Summary, EmptyCart, FullCart } from "./../components/cart";
// import { ListProducts } from "./../components/search/ListProducts";

import {IProduct, ICartProduct} from './../interfaces/interfaces'

const GET_PRODUCTS = gql`
  query getProducts {
    getProducts {
      id
      name
      price
      image
    }
  }
`;

interface Props {
  disabled: boolean;
};

const Home:FC<Props> = ({ disabled }) => {
  // get products of Graphql
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  
  // useStates
  // para almacenar la palabra buscada
  const [search, setSearch] = useState("");
  // Para almacenar los productos buscados
  const [searchedProduct, setSearchedProduct] = useState([]);
  // Para el carrito de compras
  const [listProduct, setListProduct] = useState<IProduct[]>([{
    id: "",
    name: "",
    price: 0,
    image: "",
    quantity: 0,
  }])
    
  
  // read input search
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;
    setSearch(input);
    let lengthSearch = input.length;

    if (lengthSearch >= 3) {
      // filter of products
      let productFilter = data.getProducts.filter((e: any) =>
        e.name.toLowerCase().includes(search.toLowerCase())
      );

      setSearchedProduct(productFilter);

      // console.log(productFilter);
    } else if (search.length < 3) {
      return;
    }
    // console.log(searchedProduct);
    // console.log(searchedProduct.length);
  };

  const onCart = (product:IProduct) => {
    console.log("agregando producto") 
    
    setListProduct([
        product,
      ...listProduct
    ])
    // if(product) {return}
    // console.log(product) 
  }
  // console.log(listProduct) 
  
  const addOrRemoveProduct = (product:IProduct, add:boolean) => {
    const listProducts = listProduct.map((prd) => {
      if (prd.id === product.id) {
        if (add) {
          prd.quantity += 1;
        } else {
          if (product.quantity > 1) {
            product.quantity -= 1;
          }
        }
      }
      return {
        ...product,
      };
    });
    setListProduct(listProducts);
    // localStorage.setItem("producto", JSON.stringify(products));
  };

  return (
    <>
      <Head>
        <title>Riqra Store- Home</title>
        <meta name="description" content="Riqra Store- Home" />
        <meta name="og:title" content="Riqra Store- Home" />
        <meta name="og:description" content="Riqra Store- Home" />
      </Head>
      <Main>
        {loading ? (
          <FullScreenLoading
            textAlign={""}
            fontWeight={0}
            color={""}
            fontSize={""}
          />
        ) : (
          <>
            <Container>
              <GridCol2 className={styles.search}>
                <Input
                  type="search"
                  value={search}
                  onChange={handleInput}
                  id="inputSearch"
                  placeholder="Search Products"
                  required
                />
              </GridCol2>

              <GridCol2 className={styles.gridFull}>
                <Box className={styles.children}>
                  {searchedProduct.length == 0 ? (
                    <EmptyCart rowGap={""} />
                  ) : (
                    searchedProduct.map((product: any) => (
                      <Card key={product.id}>
                        <Container>
                          <GridCol3>
                            <Image
                              src={product.image}
                              width={300}
                              height={200}
                              alt="complete order"
                            />
                            <FlexCol height={"auto"} justifyContent={""}>
                              <Text textAlign={""} fontWeight={600} color={""} fontSize={""}>{product.name}</Text>
                              <Text textAlign={""} fontWeight={600} color={"#FF2D55"} fontSize={"2.6rem"}>${product.price}</Text>
                            </FlexCol>
                            <ButtonCircle onClick={()=>onCart(product)}>
                              <Image
                                src={iconPlus.src}
                                width={100}
                                height={100}
                                alt="icon plus"
                              />
                            </ButtonCircle>
                          </GridCol3>
                        </Container>
                      </Card>
                    ))
                  )}
                </Box>

                {/* summary */}
                <div className={styles.summary}>
                  <div className={styles.date}>
                    <Image
                      src={cartBlue.src}
                      width={300}
                      height={200}
                      alt="order cart"
                    />
                    <Text textAlign={""} fontWeight={400} color={""} fontSize={"1.4rem"}>Buy now and get it by<Span textAlign={""} fontWeight={600} color={""} fontSize={""}>05/24/19</Span></Text>
                  </div>
                  <BoxAuto className={styles.details}>
                    <Container>
                      <Flex
                        height={"auto"}
                        justifyContent={""}
                        className={styles.detailsList}
                      >
                        <Span textAlign={""} fontWeight={400} color={""} fontSize={""}>Products:</Span>
                        <Span textAlign={""} fontWeight={400} color={""} fontSize={""}>$0.00</Span>
                      </Flex>
                      <Flex
                        height={"auto"}
                        justifyContent={""}
                        className={`${styles.detailsList} ${styles.bg}`}
                      >
                        <Span textAlign={""} fontWeight={600} color={""} fontSize={""}>Shipping Cost:</Span>
                        <Span textAlign={""} fontWeight={400} color={""} fontSize={""}>$0.00</Span>
                      </Flex>
                      <Flex
                        height={"auto"}
                        justifyContent={""}
                        className={styles.detailsList}
                      >
                        <Span textAlign={""} fontWeight={400} color={""} fontSize={""}>Taxes:</Span>
                        <Span textAlign={""} fontWeight={400} color={""} fontSize={""}>$0.00</Span>
                      </Flex>
                      <Flex height={"auto"} justifyContent={""}>
                        <Span textAlign={""} fontWeight={600} color={""} fontSize={""}>Total:</Span>
                        <Span textAlign={""} fontWeight={600} color={"#FF2D55"} fontSize={""}>$0.00</Span>
                      </Flex>
                    </Container>
                  </BoxAuto>
                  <Button disabled={disabled}>COMPLETE ORDER</Button>
                </div>
              </GridCol2>
            </Container>
            {/* <FullCart justifyContent={''} height={''} /> */}
          </>
        )}
      </Main>
    </>
  );
};

export default Home;
