import React, { useContext } from "react";
import BlogData from "../context/contextData";
import Category from "./category";

export default function Cate() {
  const bdc = useContext(BlogData);
  console.log(bdc);

  return (
    <BlogData>
      <Category />
    </BlogData>
  );
}
