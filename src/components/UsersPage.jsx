import React from 'react'
import useGetUsers from '../hook/useGetUsers'
import { Table } from 'antd';
import moment from 'moment';
import "../Sass/profile.scss"
const columns = [
    {
      title: 'Image',
      dataIndex: 'profilePicURL',
      render: (text, record) => <img src={text} alt="" />,
    },
    {
      title: 'Name',
      dataIndex: 'Name',
    },
    {
      title: 'Country',
      dataIndex: 'country',
    },
    {
      title: 'City',
      dataIndex: 'city',
    },
    {
      title: 'CreatedAt',
      dataIndex: 'createdAt',
      render:(created)=><span>{moment(created).format("l")}</span>
    },
  ];
const UsersPage = () => {
    const {isLoading,userData}=useGetUsers()
    const data = userData.map((post, index) => ({
        key: index.toString(), // Burada her bir verinin bir benzersiz bir anahtarı olması gerektiğinden key olarak index'i kullanıyoruz.
        profilePicURL: post.profilePicURL,
        Name: post.Name,
        country: post.country,
        city: post.city,
        createdAt:post.createdAt
    
      }));
  return (
    <div className='users-page'>
        <Table columns={columns} dataSource={data} size="middle" />
    </div>
  )
}

export default UsersPage
