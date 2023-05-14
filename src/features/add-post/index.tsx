import { Input, Button, Form } from "antd";
import * as S from "./styles";
import { useMutation, useQueryClient } from "react-query";
import { createPost } from "../../api/posts";

interface Props {
  userId: number | string | undefined;
}

interface Post {
  title: string;
  body: string;
}

const AddPost = ({ userId }: Props) => {
  const queryClient = useQueryClient();

  const { mutate: mutateCreate, isLoading } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
    },
  });

  const handleSubmit = (values: Post) => {
    mutateCreate({ ...values, userId });
  };

  return (
    <S.Container>
      <h2>Create a post</h2>
      <Form onFinish={handleSubmit} layout="inline">
        <Form.Item name="title">
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item name="body">
          <Input placeholder="Content" />
        </Form.Item>
        <Form.Item>
          <Button loading={isLoading} type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    </S.Container>
  );
};

export default AddPost;
