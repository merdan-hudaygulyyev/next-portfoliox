import Image from "next/image";
//
import img1 from "@/public/GDsZXsUKtpsjJADxrIVTeXRmw0c.jpg";
import img2 from "@/public/WIN_20250520_14_36_05_Pro.jpg";
import img3 from "@/public/GQcKbjyzMqyPwLYJyIscmAYXU0v.jpg";
import img4 from "@/public/GUIvqbRosRHyHDprIAvtiGwDo0q.jpg";
import img5 from "@/public/GUYgohNyyCBXNVXIsrQKRlxOo0u.jpg";
import img6 from "@/public/GVIIjHKqKOvgoYxDLQTloufJI0y.jpg";

export default function ImageContent() {
  return (
    <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8 max-w-4xl mx-auto hover:shadow-2xl duration-200">
      <div className="relative h-40">
        <Image src={img1} className="rounded-lg object-cover" alt="img1" fill />
      </div>
      <div className="relative sm:row-span-2 row-span-1">
        <Image src={img2} className="rounded-lg object-cover" alt="img2" fill />
      </div>
      <div className="relative">
        <Image src={img3} alt="img3" className="rounded-lg object-cover" fill />
      </div>
      <div className="relative row-span-2">
        <Image
          src={img4}
          alt="img4"
          className="rounded-lg object-cover sm:object-center"
          fill
        />
      </div>
      <div className="relative row-span-2">
        <Image src={img5} alt="img5" className="rounded-lg object-cover" fill />
      </div>
      <div className="relative h-40">
        <Image src={img6} alt="img6" className="rounded-lg object-cover" fill />
      </div>
    </div>
  );
}
