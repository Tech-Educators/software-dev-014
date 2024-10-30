import Image from "next/image";
import FlowerPopover from "@/components/Popover";

export default async function HomePage() {
  const response = await fetch("http://localhost:3000/api/flowers");
  const flowers = await response.json();

  return (
    <div>
      <h1 className="flex justify-center p-2">Flower List</h1>

      {flowers.map((flower) => (
        <div key={flower.id} className="flex flex-col items-center p-2 ">
          <Image
            src={flower.flower_image}
            alt={flower.flower_name}
            width={100}
            height={200}
            className="rounded-md"
          />
          <br />
          <FlowerPopover
            flower_name={flower.flower_name}
            flower_location={flower.flower_location}
          />
          {/* <FlowerPopover
            flower_name={flower.flower_name}
            flower_location={flower.flower_location}
          /> */}
        </div>
      ))}
    </div>
  );
}
