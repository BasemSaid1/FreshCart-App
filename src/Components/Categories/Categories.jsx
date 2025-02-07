import React, { useContext, useEffect, useState } from "react";
import style from "./Categories.module.css";
import { CartContext } from "../../Context/CartContext";

export default function Categories() {
  const { getcategory } = useContext(CartContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        let res = await getcategory();
        setCategories(res.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
  }, [getcategory]);

  return (
    <>
      <h2 className="text-3xl font-bold text-center mt-3 text-emerald-600 mb-6">
        Categories
      </h2>
      <div className="flex flex-wrap ">
        {categories.length > 0 ? (
          categories?.map((cate) => (
            <div
              key={cate._id}
              className="w-full sm:w-1/2 md:w-1/3 flex flex-col"
            >
              <div className="m-6 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500">
                <img
                  src={cate.image}
                  className="w-full h-72 object-cover"
                  alt={cate.name}
                />
                <h2 className="text-xl font-semibold text-center py-3">
                  {cate.name}
                </h2>
              </div>
            </div>
          ))
        ) : (
          <div className="parentLoader w-[80%] mx-auto py-28">
            <span className="loader"></span>
          </div>
        )}
      </div>
    </>
  );
}
