import { DeleteOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";

const DeleteButton = ({ showTooltip = true, onClick, title = "Delete" }) => {
  return (
    <Tooltip  arrow={false} title={title}>
      <Button
        style={{ position: "absolute", top: 0, right: 0 }}
        danger
        type="text"
        onClick={onClick}
        icon={<DeleteOutlined onClick={onClick} />}
      ></Button>
    </Tooltip>
  );
};

export default DeleteButton;
