import Image from "next/image";
import Link from "next/link";

export default function NavLogo({ visibleItems }) {
  return (
    <div
      className={`${
        visibleItems < 3 && "flex-grow"
      } flex items-center text-xl font-bold`}
    >
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={160}
          height={160}
          className="mr-2"
          priority
        />
      </Link>
    </div>
  );
}
