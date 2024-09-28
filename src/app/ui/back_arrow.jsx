import Link from "next/link";
import Image from "next/image";

const BackArrow = () => {
  return (
    <button className="relative z-30">
      <Link href="/" className="fixed bottom-0 right-0 z-0" scroll={false}>
        <Image
          className="rounded-top rounded-bottom mb-6 mr-6 rounded-md"
          src="/images/flecha-hacia-atras.png"
          width={50}
          height={50}
          alt="veryfazty-return-button"
        />
      </Link>
    </button>
  );
};

export default BackArrow;
