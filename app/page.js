import { getProperties } from "@/utils/requests";
import ListedProperties from "@/components/properties/listedProperties";
import FeaturedProperties from "@/components/properties/featuredProperties";
import OwnerToClient from "@/components/ownerToClient/ownerToClient";
import Reviews from "@/components/reviews/reviews";


const Home = async () => {
  const properties = await getProperties();
  const listedProperties = properties.filter((property) => property.is_listed === true).slice(0, 3) || [];
  const featuredProperties = properties.filter((property) => property.is_featured).slice(0, 3) || [];

  return (
    <main>
      <section className="flex md:flex-row flex-col gap-3  w-full bg-blue-600/60 p-10">
        {featuredProperties.length > 0 ? <FeaturedProperties featuredProperties={featuredProperties} /> : ''}
      </section>
      <section className="flex lg:flex-row flex-col gap-3  w-full bg-blue-600/60 pl-10 pr-10 pb-10 ">
        <OwnerToClient />
        <Reviews />
        {listedProperties.length > 0 ? <ListedProperties className="flex-2 border-[0.3px] border-blue-900 rounded-md p-5" listedProperties={listedProperties} /> : ''}
      </section>
    </main>
  );
}

export default Home
