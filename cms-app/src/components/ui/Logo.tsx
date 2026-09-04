import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex h-11 w-11 items-center justify-center">
      <Image
        src="/Logo.jpg"
        alt="CMS Platform Logo"
        width={44}
        height={44}
        className="h-11 w-11 object-contain"
        priority
      />
    </div>
  );
}