import { ProductionHouseItemType } from "./ProductionHouse";

const ProductionHouseItem = ({ item }: { item: ProductionHouseItemType }) => {
  return (
    <div className="relative border-2 border-gray-600 rounded hover:scale-110 transition-all duration-200 ease-in-out shadow-xl shadow-black">
      <video
        src={item.video}
        autoPlay
        loop
        playsInline
        className="absolute top-0 opacity-0 hover:opacity-50 rounded z-0"
      ></video>
      <img src={item.image} className="w-full z-[1]" />
    </div>
  );
};

export default ProductionHouseItem;
