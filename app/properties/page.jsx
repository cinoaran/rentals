
import { getProperties } from "@/utils/requests";
import AllProperties from "@/components/properties/allProperties";


export const metadata = {
  title: "Properties",
};

const PropertiesPage = async () => {

  const properties = await getProperties();

  return (
    <section className="w-full">
      {properties.length === 0 ? <h2 className="text-center bg-white h-[300px] text-shadow-md  text-3xl font-bold mt-96">Actually no properties to show!</h2> : ''}
      <AllProperties properties={properties} />
    </section>
  );
};

export default PropertiesPage;
