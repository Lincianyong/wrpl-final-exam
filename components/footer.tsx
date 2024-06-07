import Image from "next/image";
import BeliBookLogo from "@../../../public/logo/beli-book-logo.png";

export default function Footer() {
  return (
    <div className={"container mt-5 mb-4"}>
      <footer className={"p-2 border-top"}>
        <Image
          src={BeliBookLogo}
          height={500}
          width={500}
          alt=""
          className="w-[300px] h-auto"
        />
      </footer>
    </div>
  );
}
