import OwnerToClient from "@/components/owner to client/ownerToClient";
import Reviews from "@/components/reviews/reviews";

export default function Home() {
  return (
    <main>
      <section className="w-full bg-white">
        <div>Cards</div>
      </section>
      <section className="flex md:flex-row flex-col gap-10  w-full bg-blue-600/70 p-10 ">

        <OwnerToClient className="flex-1" />

        <Reviews className="flex-1" />

      </section>
    </main>
  );
}
