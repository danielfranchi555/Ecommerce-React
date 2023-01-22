import Item from "../Item/Item";
import "./ItemList.scss";
import ClipLoader from "react-spinners/ClipLoader";

const ItemList = ({ filter, loading }) => {
  return (
    <div className=" row mainItemList ">
      {loading ? (
        <div className="text-center col  mt-5 py-5">
          <ClipLoader color={"#36d7b7"} loading={loading} size={50} />
        </div>
      ) : (
        filter.map((item) => <Item item={item}></Item>)
      )}
    </div>
  );
};

export default ItemList;
