import "../Sass/cartpage.scss";
import { useStore } from "../store/Cart";
import { Table } from "antd";
import Price from "format-price";
import moment from "moment";

const CartPage = () => {
  const FavoriteData = useStore((state) => state.favoriteData);
  const {removeFromFavorite}=useStore()
  const data = FavoriteData.map((post, index) => ({
    key: index.toString(),
    name: post.title,
    image: post.image,
    price: post.price,
    createdAt:post.createdAt,
    cartId:post.cartId
  }));
  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      render: (text, record) => <img src={text} alt="" />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      render:(price)=><span>{Price.format("en-US", "USD", price)}</span>
    },
    {
      title: 'CreatedAt',
      dataIndex: 'createdAt',
      render:(created)=><span>{moment(created).format("l")}</span>
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (_, record) => (
        <a onClick={() => removeFromFavorite(record.cartId)}>Delete</a>
      ),
    },
  ];
  return (
    <Table
    columns={columns}
    expandable={{
      expandedRowRender: (record) => (
        <p
          style={{
            margin: 0,
          }}
        >
          {record.description}
        </p>
      ),
      rowExpandable: (record) => record.name !== 'Not Expandable',
    }}
    dataSource={data}
  />
  );
};

export default CartPage;
