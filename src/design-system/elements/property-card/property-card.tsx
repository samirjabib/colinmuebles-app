import Image from "next/image";

export default function PropertyCard() {
  return (
    <div>
      <div className="relative">
        <Image
          fill
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
          alt="propery-image"
        />
      </div>
      <div>
        <div>
          <h3>Finca en giraldota</h3>
          <p></p>
        </div>
      </div>
    </div>
  );
}
