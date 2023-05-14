import React from "react";
import { Layout, Spin } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getUserWithId } from "../../api/users";
import * as S from "./styles";
import UserPostsTable from "../../features/user-posts-table";
import AddPost from "../../features/add-post";

const { Content, Sider } = Layout;

const UserDetail = () => {
  const { id } = useParams();
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserWithId(id),
  });

  if (isLoading) return <Spin size="large" />;

  return (
    <Layout>
      <Sider>
        <S.SiderContent>
          <S.UserImage>
            <UserOutlined />
          </S.UserImage>
          <div>{user.name}</div>
          <div>{user.email}</div>
          <div>{user.phone}</div>
          <div>{`${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`}</div>
        </S.SiderContent>
      </Sider>
      <Content>
        <AddPost userId={id} />
        <UserPostsTable userId={id} />
      </Content>
    </Layout>
  );
};

export default UserDetail;
