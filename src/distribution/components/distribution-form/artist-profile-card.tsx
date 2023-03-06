import { GlobalOutlined, SettingOutlined } from "@ant-design/icons";
import { Avatar, Card, Row, Space, Tooltip, Typography } from "antd";
import DeleteButton from "../shared/delete-button";

const { Text } = Typography;

interface Props {
  onClick: () => void;
  name: string;
  id: number | string;
  onDeleteClick: () => void;
}
const ArtistProfileCard = ({ onClick, name, id, onDeleteClick }: Props) => {
  return (
    <Card
      hoverable
      onClick={onClick}
      bodyStyle={{ padding: 12, width: "100%" }}
    >
      <Row
        onMouseEnter={() => {
          console.log("mouse eneter");
        }}
        justify="space-between"
        align="middle"
      >
        <Space size="middle">
          <Avatar>
            {name
              .split(" ")
              .map((item: string) => item[0])
              .join("")}
          </Avatar>
          <Text>{name}</Text>
        </Space>
        <Space size="middle">
          <Tooltip title="locals">
            <GlobalOutlined style={{ fontSize: 22 }} />
          </Tooltip>
          <Tooltip title="Spotify ID">
            <GlobalOutlined style={{ fontSize: 22 }} />
          </Tooltip>
          <Tooltip title="Apple ID: 423423">
            <GlobalOutlined style={{ fontSize: 22 }} />
          </Tooltip>

          <DeleteButton onClick={onDeleteClick} />
        </Space>
      </Row>
    </Card>
  );
};

export default ArtistProfileCard;
