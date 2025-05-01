import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

export default async function Home() {

  const billboard = await getBillboards("a3016522-9fab-42b7-ad47-de7636a1fcf7")
  const products = await getProducts({ isFeatured: true })

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 ">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}
