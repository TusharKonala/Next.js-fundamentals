interface Props {
  params: {
    slug: string[];
  };
}

const ProductPage = async ({ params }: Props) => {
  const { slug } = await params;
  return <div>ProductPage {slug.join(",")}</div>;
};

export default ProductPage;
