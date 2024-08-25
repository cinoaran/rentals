import { getProperties } from "@/utils/requests";
import ListedProperties from "@/components/properties/listedProperties";
import FeaturedProperties from "@/components/properties/featuredProperties";
import OwnerToClient from "@/components/ownerToClient/ownerToClient";
import Reviews from "@/components/reviews/reviews";


const Home = async () => {
  const properties = await getProperties();
  const listedProperties = properties.filter((property) => property.is_listed === true).slice(0, 3) || [];

  return (
    <main className="w-full bg-white">
      <section className="flex lg:flex-row flex-col gap-3 w-full bg-white p-10">
        <OwnerToClient />
        <Reviews />
        {properties && properties.length > 0 ? <ListedProperties listedProperties={listedProperties} /> : ''}
      </section>
    </main>
  );
}

export default Home
