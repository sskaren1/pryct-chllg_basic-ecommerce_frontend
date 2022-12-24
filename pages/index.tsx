// import layouts
import { MainLayout } from './../components/layouts/MainLayout';
// import components
import { EmptyCart } from './../components/cart'
import { ListProducts } from './../components/products/ListProducts'

export default function Home() {
  return (
    <>
      <MainLayout title={'Riqra Shop - Home'} pageDescription={'Tienda Online Riqra'}>
        <ListProducts />
        {/* <EmptyCart /> */}
      </MainLayout>
    </>
  );
}
