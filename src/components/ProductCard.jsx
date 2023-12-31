import React, { useEffect, useState } from "react";

const ProductCard = (props) => {
  const [posts, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);
  console.log(props.img);

  return (
    <div className="grid grid-cols-2 mx-14 gap-6">
      {posts.map((p) => {
        const { id, title, images, description, price } = p;
        return (
          <div
            key={id}
            className="flex border-4 p-4 justify-between items-center rounded-lg"
          >
            <img
              className="w-[200px] h-[200px]"
              src={images[`${props.img}`]}
              alt=""
            />
            <div className="pl-10">
              <p className="font-semibold">
                {props.img}
                {title}
              </p>
              <p>{description}</p>
              <p className="font-semibold">Price: {price}$</p>
              <button className="mt-5 text-orange-500 font-bold">
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
