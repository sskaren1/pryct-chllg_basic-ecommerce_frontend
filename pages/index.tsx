// import layouts
import { MainLayout } from './../components/layouts/MainLayout';
// import components
import { EmptyCart } from './../components/cart'

export default function Home() {
  return (
    <>
      <MainLayout title={'Riqra Shop - Home'} pageDescription={'Tienda Online Riqra'}>
        <EmptyCart />
      </MainLayout>
    </>
  );
}
