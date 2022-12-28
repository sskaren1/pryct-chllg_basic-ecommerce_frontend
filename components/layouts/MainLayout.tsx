// import react
import { FC } from "react";
import { useState } from "react";
// import next
import Head from "next/head";
// import interfaces
// import { propsMainLayout, propsSearch } from "./../interfaces/interfaces";
// import components
import { Summary } from "./../cart";
import { FullScreenLoading } from "./../ui/FullScreenLoading";
// import styles components
import { Main, Container, GridCol2, Box } from "../ui/layout";
import { Input } from "../ui/form";
// import css modules
import styles from "./mainLayout.module.css";
// import apollo client
import { useQuery, gql, useLazyQuery } from "@apollo/client";

// interface Props {
//   propsMainLayout: propsMainLayout;
//   propsSearch: propsSearch;
// }

// const GET_PRODUCTS = gql`
//   query getProducts {
//     getProducts {
//       id
//       name
//       price
//       image
//     }
//   }
// `;
const SEARCH_PRODUCTS = gql`
  query searchProduct($text: String!) {
    searchProduct(text: $text) {
      id
      name
      price
      image
    }
  }
`;

export const MainLayout: FC<propsMainLayout> = (
  {children,title,pageDescription,imageFullUrl}: propsMainLayout,
  ) => {
  // get products of Graphql
  // const { data, loading, error } = useQuery(GET_PRODUCTS);
  // const { data, loading, error } = useQuery(SEARCH_PRODUCTS, { text: "aceite" });
  // console.log(data);
  // console.log(loading);
  // console.log(error);

  const [getPerson, result] = useLazyQuery(SEARCH_PRODUCTS);

  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState(false);
  const [searchedProduct, setSearchedProduct] = useState(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("search", e.target.value);
    setSearchTerm(e.target.value);
  };
  // const onSearchTerm = () => {
  //   if (searchTerm.trim().length === 0) return;
  // };

  if (searchTerm.length > 3) {
    setSearch(true);
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>

      <Main>
        {/* {loading ? (
          <FullScreenLoading
            textAlign={""}
            fontWeight={0}
            color={""}
            fontSize={""}
          />
        ) : ( */}
        <>
          <Container>
            <GridCol2 className={styles.search}>
              <Input
                type="search"
                value={searchTerm}
                onChange={handleInput}
                // onKeyPress={ (e) => e.key === 'Enter' ? onSearchTerm() : null }
                id="inputSearch"
                placeholder="Search Products"
                required
              />
            </GridCol2>

            <GridCol2 className={styles.gridFull}>
              <Box className={styles.children} >{children}</Box>
              <Summary disabled={false} />
            </GridCol2>
          </Container>
        </>
        {/* )} */}
      </Main>
    </>
  );
};
