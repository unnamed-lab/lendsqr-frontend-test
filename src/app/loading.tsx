import Image from 'next/image';
import React from 'react'

export default function Loading() {
  return (
    <section className="loader-section">
      <Image
        priority
        className={"loader"}
        src="/brand.svg"
        alt="Lendsqr"
        width={100}
        height={30}
      />
    </section>
  );
}
