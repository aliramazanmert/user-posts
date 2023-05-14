import { useState, useEffect } from "react";
import { Table } from "antd";
import { useQuery, useMutation } from "react-query";
import { deletePost, getPostsWithUserId } from "../../api/posts";
import { columns, PAGE_SIZE } from "./config";

interface Props {
  userId: number | string | undefined;
}

const UserPostsTable = ({ userId }: Props) => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["user-posts"],
    queryFn: () => getPostsWithUserId(userId, page, PAGE_SIZE),
  });

  const { mutate: mutateDelete, isLoading: isDeleteLoading } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      refetch();
    },
  });

  useEffect(() => {
    refetch();
  }, [page]);

  const handlePaginationChange = (page: number) => {
    setPage(page);
  };

  const handleDelete = (id: number) => {
    mutateDelete(String(id));
  };

  return (
    <Table
      dataSource={data?.data}
      columns={columns({ onDelete: handleDelete, isLoading: isDeleteLoading })}
      loading={isLoading || isFetching}
      pagination={{
        pageSize: PAGE_SIZE,
        onChange: handlePaginationChange,
        total: data?.total,
      }}
    />
  );
};

export default UserPostsTable;
