interface Props {
  params: {
    slug: string[];
  };
  searchParams: {
    sortOrder: string;
  };
}

const ProductPage = async ({ params, searchParams }: Props) => {
  // const { slug } = await params;
  // const { sortOrder } = await searchParams;

  const [{ slug }, { sortOrder }] = await Promise.all([params, searchParams]);
  return (
    <div>
      ProductPage {slug.join(",")} {sortOrder}
    </div>
  );
};

export default ProductPage;
