import { CDN_URL } from "../utils/constants";

const ItemsList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-gray-300 border-b last:border-b-0 text-left flex justify-between items-center"
        >
          <div>
            <div className="py-2">
              <p>{item.card.info.name}</p>
              <p>&#8377; {item.card.info.price / 100}</p>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="relative">
            <div className="absolute bottom-0">
              <button className="p-2 bg-black text-white rounded-lg">
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-32 rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
