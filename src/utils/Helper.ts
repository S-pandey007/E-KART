export type FeedItem =
  | { id: string; type: "PRODUCT_LIST"; data: Product[] }
  | { id: string; type: "BRAND_EXPLORE"; data: Brand[] }
  | { id: string; type: "FRESH_SELECTION"; data: FreshCollection }
  | { id: string; type: "ADVERTISEMENT"; data: Advertisement }
  | { id: string; type: "SPONSORED_PRODUCTS"; data: Product[] }
  | { id: string; type: "INFLUENCER"; data: Influencer[] };

const createBrandData = (data: any) => {
  let brand = [];
  brand = data?.map((d: any) => {
    let a = {
      id: d._id,
      name: d.brand,
      image: d.image,
    };
    return a;
  });
  return brand;
};

const createFreshCollection = (data: any) => {
  let BrandIcon = data?.[0]?.image ?? "";
  let BrandTitle = data?.[0]?.brand ?? "";
  let freshCollection = [];
  freshCollection = data?.map((d: any) => {
    let a = {
      id: d._id,
      title: d.name,
      image: d.image,
      rating: d.rating,
      originalPrice: d.originalPrice,
      sellingPrice: d.sellingPrice,
      discountPercent: d.discountPercent,
    };
    return a;
  });

  return { BrandTitle, BrandIcon, freshCollection };
};

const createSponsoredData = (data: any) => {
  let sponsoredata = [];
  sponsoredata = data?.map((d: any) => {
    let a = {
      id: d._id,
      title: d.name,
      image: d.image,
      rating: d.rating,
      originalPrice: d.originalPrice,
      sellingPrice: d.sellingPrice,
      discountPercent: d.discountPercent,
    };
    return a;
  });
  return sponsoredata;
};

const PRODUCT_CHUNK_SIZE = 10;

export const createFeed = ({ products = [], influencers = [] }: any) => {
  const feed: any[] = [];

  let cursor = 0;

  while (cursor < products.length) {
    // product list block
    const productChunk = products.slice(cursor, cursor + PRODUCT_CHUNK_SIZE);

    feed.push({
      id: `products-${cursor}`,
      type: "PRODUCT_LIST",
      data: productChunk,
    });

    // brand explore
    if (cursor === 0) {
      feed.push({
        id: "brand-explore-1",
        type: "BRAND_EXPLORE",
        data: createBrandData(productChunk),
      });
    }

    // fresh selection
    if (cursor === PRODUCT_CHUNK_SIZE) {
      feed.push({
        id: "fresh-selection-1",
        type: "FRESH_SELECTION",
        data: createFreshCollection(productChunk),
      });
    }

    // sponsored products
    if (cursor === PRODUCT_CHUNK_SIZE * 2) {
      feed.push({
        id: "sponsored-1",
        type: "SPONSORED_PRODUCTS",
        data: createSponsoredData(productChunk),
      });
    }

    //advertisment
    if (cursor === PRODUCT_CHUNK_SIZE * 3) {
      feed.push({
        id: "advertisement-1",
        type: "ADVERTISEMENT",
        data: [],
      });
    }

    cursor += PRODUCT_CHUNK_SIZE;
  }

  if (influencers.length) {
    feed.push({
      id: "influencer-1",
      type: "INFLUENCER",
      data: influencers,
    });
  }

  return feed;
};
