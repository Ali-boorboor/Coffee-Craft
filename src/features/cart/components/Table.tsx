import React from "react";
import Button from "@/components/ui/button";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";

type TableProps = {
  cartDatas: {
    products: { id: string; name: string; quantity: number; price: number }[];
    totalPrice: number;
    totalQuantity: number;
  };
  dataAnimate?: string;
};

const Table = ({ cartDatas, dataAnimate }: TableProps) => {
  return (
    <div
      className="max-w-2xl w-full rounded-md border-2 border-white/60 shadow-xs shadow-white overflow-auto no-scrollbar"
      data-animate={dataAnimate}
    >
      <table className="bg-primary text-primary-foreground w-full text-center">
        <thead className="sticky top-0">
          <tr className="bg-white/60 backdrop-blur-3xl text-primary-foreground transition-colors duration-300 ease-linear hover:bg-white/90">
            <th className="p-2 text-base md:text-lg font-bold transform-gpu will-change-transform">
              Number
            </th>
            <th className="p-2 text-base md:text-lg font-bold transform-gpu will-change-transform">
              Product Name
            </th>
            <th className="p-2 text-base md:text-lg font-bold transform-gpu will-change-transform">
              Quantity
            </th>
            <th className="p-2 text-base md:text-lg font-bold transform-gpu will-change-transform">
              Price
            </th>
            <th className="p-2 text-base md:text-lg font-bold transform-gpu will-change-transform">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {cartDatas.products.map((product, index) => (
            <tr
              className="transition-colors duration-300 ease-linear hover:bg-secondary hover:text-secondary-foreground"
              key={product.id}
            >
              <td className="p-2 text-sm md:text-base font-medium border-t-2 border-t-white/60 capitalize transform-gpu will-change-transform">
                {index + 1}
              </td>
              <td className="p-2 text-sm md:text-base font-medium border-t-2 border-t-white/60 capitalize transform-gpu will-change-transform">
                {product.name}
              </td>
              <td className="p-2 text-sm md:text-base font-medium border-t-2 border-t-white/60 transform-gpu will-change-transform">
                {product.quantity}
              </td>
              <td className="p-2 text-sm md:text-base font-medium border-t-2 border-t-white/60 transform-gpu will-change-transform">
                {product.price} $
              </td>
              <td className="p-2 space-x-2 text-sm md:text-base font-medium border-t-2 border-t-white/60 transform-gpu will-change-transform">
                <Button size="icon">
                  <FaPlus className="size-4 md:size-6" />
                </Button>
                <Button size="icon">
                  <FaMinus className="size-4 md:size-6" />
                </Button>
                <Button
                  size="icon"
                  className="bg-red-400/66 text-black hover:bg-red-400/66"
                >
                  <FaTrashAlt className="size-4 md:size-6" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot className="sticky bottom-0">
          <tr className="bg-white/60 backdrop-blur-3xl text-primary-foreground transition-colors duration-300 ease-linear hover:bg-white/90">
            <td className="p-2 text-base md:text-lg font-bold border-t-2 border-t-white/60 capitalize transform-gpu will-change-transform">
              total
            </td>
            <td className="p-2 text-base md:text-lg font-bold border-t-2 border-t-white/60 transform-gpu will-change-transform">
              -
            </td>
            <td className="p-2 text-base md:text-lg font-bold border-t-2 border-t-white/60 transform-gpu will-change-transform">
              {cartDatas.totalQuantity}
            </td>
            <td className="p-2 text-base md:text-lg font-bold border-t-2 border-t-white/60 transform-gpu will-change-transform">
              {cartDatas.totalPrice} $
            </td>
            <td className="p-2 text-base md:text-lg font-bold border-t-2 border-t-white/60 transform-gpu will-change-transform">
              -
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
