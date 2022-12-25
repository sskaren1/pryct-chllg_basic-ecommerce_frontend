// import react
import { FC } from "react";
// import next
import Head from "next/head";
// import components
import { Summary } from "./../cart";
// import styles components
import { Main, Container, GridCol2, Box } from "../ui/layout";
import { Input } from "../ui/form";
// import css modules
import styles from "./mainLayout.module.css";

interface Props {
  children: React.ReactElement;
  title: string;
  pageDescription: string;
  imageFullUrl?: string; // ?:opcional
}

export const MainLayout: FC<Props> = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {
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
        <Container>
          <GridCol2 className={styles.search}>
            <Input
              type="search"
              id="inputSearch"
              placeholder="Search Products"
              required
            />
          </GridCol2>

          <GridCol2 className={styles.gridFull}>
            <Box className={styles.children}>{children}</Box>
            <Summary disabled={false} />
          </GridCol2>
        </Container>
      </Main>
    </>
  );
};
