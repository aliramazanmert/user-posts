import { Button } from "antd";

interface Props {
  onDelete: (id: number) => void;
  isLoading: boolean;
}

export const columns = ({ onDelete, isLoading }: Props) => [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Content",
    dataIndex: "body",
    key: "body",
  },
  {
    title: "Actions",
    dataIndex: "id",
    key: "id",
    render: (id: number) => {
      return (
        <Button
          loading={isLoading}
          danger
          type="primary"
          onClick={() => onDelete(id)}
        >
          Delete
        </Button>
      );
    },
  },
];

export const PAGE_SIZE = 3;
