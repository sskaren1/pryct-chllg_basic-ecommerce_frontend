// import react hooks
import { useState, useEffect, FC } from "react";
// import next
import Head from "next/head";
import Image from "next/image";
// import apollo client
import { useQuery, gql } from "@apollo/client";
// import images
import iconCompleteOrder from "./../public/images/icon_orden_completa.png";
import iconPlus from "./../public/images/icon_plus.png";
import iconMinus from "./../public/images/icon_minus.png";
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
  BoxSquare,
} from "../components/ui/layout";
import { Input, ButtonCircle, Button } from "../components/ui/form";
import { Card } from "../components/ui/surfaces";
import { PropsTyph, Text, Span } from "../components/ui/typography";
// import css modules
import styles from "./home.module.css";
// import components
import { FullScreenLoading } from "./../components/ui/FullScreenLoading";
import { EmptyCart } from "./../components/cart";
// import interfaces
import { IProduct, newIProduct, ICartProduct } from "./../interfaces/interfaces";

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
}

const Home: FC<Props> = ({ disabled }) => {
  // get products of Graphql
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  // useStates
  // para almacenar la palabra buscada
  const [search, setSearch] = useState("");
  // Para almacenar los productos buscados
  const [searchedProduct, setSearchedProduct] = useState([]);
  // Para el carrito de compras
  const [listProduct, setListProduct] = useState<newIProduct[]>([
    {
      product: {
        id: "0",
        name: "",
        price: 0,
        image: ""
      },
      quantity: 0
    },
  ]);
  // Para la orden
  const [prod, setProd] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [total, setTotal] = useState(0);
  // Para el modal de agregar y quitar productos
  const [modal, setModal] = useState(true);

  const HandleModal = () => {
    if (modal == true) {
      setModal(false);
    } else {
      setModal(true);
    }
  };

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
  };

  // Para quitar el 1er array vacío creado del carrito
  const clean = () => {
    const filter = listProduct.filter((prd) => prd.product.id !== "0");
    setListProduct(filter); 
  }

  // Para añadir el producto seleccionado al carrito
  const onCart = (product: IProduct) => {
    const newPrd:newIProduct = {
      product,
      quantity:1
    }

    const filter = listProduct.filter((prd) => prd.id !== "0"); 
    setListProduct([newPrd, ...filter]);      
  };

  // Para remover el producto seleccionado del carrito
  const removeProduct = (product: IProduct) => {
    const filter = listProduct.filter((prd) => prd.id !== product.id);
    setListProduct(filter);      
  };

  // Para agregar o modificar la cantidad del producto seleccionado
  const addOrRemoveProduct = (product: IProduct, add: boolean) => {
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

  // Para calcular el precio total por los productos
  const calculatePriceTotal = () => {
    let sumProd:number = 0;
    let sumShipping:number = 0;
    let sumTaxes:number = 0;
    let sumTotal:number = 0;
    // console.log("listProduct",listProduct)
    listProduct.forEach((prd) => {
      const finalPrice = prd.quantity * prd.product.price;
      sumProd += finalPrice;
    });
    sumShipping = 0.1 * sumProd;
    sumTaxes = 0.18 * sumProd;
    sumTotal = sumProd + sumShipping;

    setProd(Number(sumProd.toFixed(2)));  
    setShipping(Number(sumShipping.toFixed(2)))  
    setTaxes(Number(sumTaxes.toFixed(2)))  
    setTotal(Number(sumTotal.toFixed(2)))  
  };

 

  useEffect(()=>{
    clean()
  },[])  
  useEffect(()=>{
    calculatePriceTotal()
  },[listProduct])

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
              {/* search */}
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
              {/* search */}

              <GridCol2 className={styles.gridFull}>
                <Box className={styles.children}>
                  {search.length == 0 ? (
                    // list of products in the cart
                    listProduct.length > 0 ? (
                      listProduct.map((product: IProduct) => ( 
                        <Card key={product.product.id}>
                          <Container>
                            <GridCol3>
                              <Image
                                src={product.product.image}
                                width={300}
                                height={200}
                                alt="order complete"
                              />
                              <FlexCol
                                height={""}
                                justifyContent={""}
                                alignItems={"left"}
                              >
                                <Text
                                  textAlign={""}
                                  fontWeight={400}
                                  color={""}
                                  fontSize={"1.8rem"}
                                >
                                  {product.product.name}
                                </Text>
                                <Text
                                  textAlign={""}
                                  fontWeight={600}
                                  color={"#FF2D55"}
                                  fontSize={"2.6rem"}
                                >
                                  ${product.product.price}
                                </Text>
                              </FlexCol>
                              <FlexCol
                                height={""}
                                justifyContent="space-around"
                                alignItems={""}
                              >
                                <ButtonCircle onClick={() => onCart(product)}>1</ButtonCircle>
                                <button className={styles.btnDelete} onClick={() => removeProduct(product)}>
                                  delete
                                </button>
                              </FlexCol>
                            </GridCol3>
                          </Container>
                        </Card>
                      ))
                    ) : (
                      <EmptyCart rowGap={""} />
                    )
                  ) : (
                    // list of searched products
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
                            <FlexCol
                              height={"auto"}
                              justifyContent={""}
                              alignItems={"left"}
                            >
                              <Text
                                textAlign={""}
                                fontWeight={600}
                                color={""}
                                fontSize={""}
                              >
                                {product.name}
                              </Text>
                              <Text
                                textAlign={""}
                                fontWeight={600}
                                color={"#FF2D55"}
                                fontSize={"2.6rem"}
                              >
                                ${product.price}
                              </Text>
                            </FlexCol>
                            {listProduct.length > 1 ? (
                              <FlexCol
                                height={""}
                                justifyContent="space-around"
                                alignItems={""}
                              >
                                <ButtonCircle onClick={() => onCart(product)}>
                                  1
                                </ButtonCircle>
                                <button className={styles.btnDelete}>
                                  delete
                                </button>
                              </FlexCol>
                            ) : (
                              <ButtonCircle onClick={() => onCart(product)}>
                                <Image
                                  src={iconPlus.src}
                                  width={100}
                                  height={100}
                                  alt="icon plus"
                                />
                              </ButtonCircle>
                            )}
                          </GridCol3>
                        </Container>
                      </Card>
                    ))
                  )}
                </Box>

                {/* <BoxSquare>
                  <Flex height={"auto"} justifyContent={""} alignItems={""}>
                    <button>
                      <Image
                        src={iconMinus.src}
                        width={100}
                        height={100}
                        alt="icon minus"
                      />
                    </button>
                    <Text
                      textAlign={""}
                      fontWeight={400}
                      color={"#fff"}
                      fontSize={"2rem"}
                    >
                      5
                    </Text>
                    <button>
                      <Image
                        src={iconPlus.src}
                        width={100}
                        height={100}
                        alt="icon plus"
                      />
                    </button>
                  </Flex>
                </BoxSquare> */}

                {/* summary */}
                <div className={styles.summary}>
                  <div className={styles.date}>
                    <Image
                      src={cartBlue.src}
                      width={300}
                      height={200}
                      alt="order cart"
                    />
                    <Text
                      textAlign={""}
                      fontWeight={400}
                      color={""}
                      fontSize={"1.4rem"}
                    >
                      Buy now and get it by
                      <Span
                        textAlign={""}
                        fontWeight={600}
                        color={""}
                        fontSize={""}
                      >
                        05/24/19
                      </Span>
                    </Text>
                  </div>
                  <BoxAuto className={styles.details}>
                    <Container>
                      <Flex
                        height={"auto"}
                        justifyContent={""}
                        className={styles.detailsList}
                        alignItems={""}
                      >
                        <Span
                          textAlign={""}
                          fontWeight={400}
                          color={""}
                          fontSize={""}
                        >
                          Products:
                        </Span>
                        <Span
                          textAlign={""}
                          fontWeight={400}
                          color={""}
                          fontSize={""}
                        >
                          ${prod}
                        </Span>
                      </Flex>
                      <Flex
                        height={"auto"}
                        justifyContent={""}
                        alignItems={""}
                        className={`${styles.detailsList} ${styles.bg}`}
                      >
                        <Span
                          textAlign={""}
                          fontWeight={600}
                          color={""}
                          fontSize={""}
                        >
                          Shipping Cost:
                        </Span>
                        <Span
                          textAlign={""}
                          fontWeight={400}
                          color={""}
                          fontSize={""}
                        >
                          ${shipping}
                        </Span>
                      </Flex>
                      <Flex
                        height={"auto"}
                        justifyContent={""}
                        alignItems={""}
                        className={styles.detailsList}
                      >
                        <Span
                          textAlign={""}
                          fontWeight={400}
                          color={""}
                          fontSize={""}
                        >
                          Taxes:
                        </Span>
                        <Span
                          textAlign={""}
                          fontWeight={400}
                          color={""}
                          fontSize={""}
                        >
                          ${taxes}
                        </Span>
                      </Flex>
                      <Flex height={"auto"} justifyContent={""} alignItems={""}>
                        <Span
                          textAlign={""}
                          fontWeight={600}
                          color={""}
                          fontSize={""}
                        >
                          Total:
                        </Span>
                        <Span
                          textAlign={""}
                          fontWeight={600}
                          color={"#FF2D55"}
                          fontSize={""}
                        >
                          ${total}
                        </Span>
                      </Flex>
                    </Container>
                  </BoxAuto>
                  <Button disabled={disabled}>COMPLETE ORDER</Button>
                </div>
                {/* summary */}
              </GridCol2>
            </Container>
          </>
        )}
      </Main>
    </>
  );
};

export default Home;
