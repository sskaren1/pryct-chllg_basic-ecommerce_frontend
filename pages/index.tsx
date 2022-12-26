// import layouts
import { MainLayout } from './../components/layouts/MainLayout';
// import components
import { EmptyCart, FullCart } from './../components/cart'
import { ListProducts } from './../components/search/ListProducts'

export default function Home() {
  return (
    <>
      <MainLayout title={'Riqra Shop - Home'} pageDescription={'Tienda Online Riqra'}>
        {/* <FullCart justifyContent={''} height={''} /> */}
        {/* <ListProducts justifyContent={''} height={''} /> */}
        <EmptyCart rowGap={''} />
      </MainLayout>
    </>
  );
}
