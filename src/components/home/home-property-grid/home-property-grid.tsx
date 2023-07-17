import { PropertyCard } from "@/design-system";

export default function HomePropertyGrid() {
  return (
    <div className="wrapper wrapper-mobile  w-full py-24 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
        {Array.from({ length: 30 }).map((_, index) => (
          <PropertyCard key={index} />
        ))}
      </div>
    </div>
  );
}
