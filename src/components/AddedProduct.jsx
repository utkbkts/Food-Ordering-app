import React from "react";
import useGetCartId from "../hook/useGetCartId";
import {  Table } from "antd";
import Price from "format-price";
import moment from "moment";
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
    title: 'Category',
    dataIndex: 'category',
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
];

const AddedProduct = () => {
  const { posts } = useGetCartId();
  const data = posts.map((post, index) => ({
    key: index.toString(), // Burada her bir verinin bir benzersiz bir anahtarı olması gerektiğinden key olarak index'i kullanıyoruz.
    name: post.title,
    image: post.image,
    price: post.price,
    category: post.category,
    createdAt:post.createdAt

  }));
  return (
    <div className="users-page">
        <Table columns={columns} dataSource={data} size="middle" />
    </div>
  );
};

export default AddedProduct;
