import { useRouter } from "next/router";
import React from "react";

const Book = () => {

  const router = useRouter();

  return <div>{router.query.id}</div>;
}

export default Book;
