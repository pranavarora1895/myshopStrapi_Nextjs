import React from "react";
import { useRouter } from "next/router";
const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <div className="container m-auto px-5">Slug: {slug}</div>
    </div>
  );
};

export default Slug;
