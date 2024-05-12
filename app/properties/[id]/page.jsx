"use client";
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getProperty } from "@/utils/requests";
import RequestForm from "@/components/requestForm/requestForm";
import Details from "@/components/details/details";
import Amenities from "@/components/amenities/amenities";
import Map from "@/components/map/map";
import PropertyImage from "@/components/hero/propertyImage";
import Loading from "@/app/loading";
import ShareOrBookmark from '@/components/social/shareOrBookmark';

const PropertyByIdPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;
      try {
        const propertyData = await getProperty(id);
        setProperty(propertyData);
      } catch (error) {
        console.error('Error fetching property', error);
      } finally {
        setLoading(false);
      }
    };

    if (property === null) {
      fetchPropertyData();
    }
  }, [id, property]);

  if (!loading && !property) {
    return <div>Property not found</div>;
  }

  return (
    <section className="bg-blue-600/60">
      {loading ? <Loading /> : (
        <>
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 bg-blue-600/60">
            <PropertyImage property={property} />
          </div>
          <div className="w-full p-10 bg-blue-600/60">
            <div className="flex flex-col md:flex-row items-start justify-start gap-10 w-full rounded-lg bg-slate-200/40 p-5">
              <Map />
              <RequestForm />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default PropertyByIdPage;