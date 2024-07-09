import React from "react";
import Link from "next/link";
import Image from "next/image";

const BackArrow = () => {
  return (
    <div className="relative">
      <Link href="/" className="fixed bottom-0 right-0 z-0">
        <Image
          className="rounded-top rounded-bottom mx-6 my-10 rounded-md  border-2 border-sky-500 bg-slate-300"
          src="/images/arrow-left-short.svg"
          width={50}
          height={50}
          alt="veryfazty-return-button"
        />
      </Link>
    </div>
  );
};

export default BackArrow;
