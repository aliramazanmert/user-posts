import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Spin, Button } from "antd";
import { useQuery } from "react-query";
import * as S from "./styles";
import { getUsers } from "../../api/users";

interface User {
  id: number;
  name: string;
}

const Users = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const handleUserClick = (id: number) => {
    navigate(`/users/${id}`);
  };

  const renderUsers = () => {
    if (isLoading) return <Spin />;

    return data?.map((d: User) => (
      <div>
        <Button onClick={() => handleUserClick(d.id)} type="link">
          {d.name}
        </Button>
      </div>
    ));
  };

  return (
    <S.Container>
      <Card title="Users">{renderUsers()}</Card>
    </S.Container>
  );
};

export default Users;
