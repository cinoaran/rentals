import Properties from "@/components/properties/properties";

export const metadata = {
  title: "Properties",
};

const PropertiesPage = () => {
  return (
    <div className="w-full h-[screen] bg-slate-50 p-5">
      <Properties />
    </div>
  );
};

export default PropertiesPage;
