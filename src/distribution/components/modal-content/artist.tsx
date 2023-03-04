import { DeleteOutlined, PlusCircleFilled } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Col,
  Form,
  Input,
  Radio,
  Row,
  Space,
  Tooltip,
  Typography,
} from "antd";
import { useState } from "react";
import { sharedStyles } from "../../utils/constants";
import { languageMapper } from "../../utils/mappers";
import { Artist } from "../../utils/types";
import FormInput from "../shared/form-input";
import FormSelect from "../shared/form-select";
import RadioGroup from "../shared/radio-group";

const { Text } = Typography;

const ArtistModalContent = ({ languages, artistToUpdate, onSave }) => {
  const [artist, setArtist] = useState<any | null>({ ...artistToUpdate });
  const showIDFields = {
    apple: typeof artist?.artistAppleId === "string",
    spotify: typeof artist?.artistSpotifyId === "string",
  };

  function handleAdd() {
    setArtist({ ...artist, artistLocals: [...artist?.artistLocals, {}] });
  }

  function handleDeleteLocal(index: number) {
    const newLocals = [...artist?.artistLocals];
    newLocals.splice(index, 1);
    setArtist({
      ...artist,
      artistLocals: newLocals,
    });
  }

  return (
    <Form
      id="artist"
      onSubmitCapture={() => onSave(artist)}
      layout="vertical"
      colon
    >
      <FormInput
        placeholder="Enter artist name"
        onChange={(e) => setArtist({ ...artist, name: e.target.value })}
        required
        label="Artist name"
      />
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Space size="middle" style={{ marginBottom: 8 }}>
            <Text>Spotify ID</Text>
            <RadioGroup
              name="spotify"
              onChange={({ target: { value } }) => {
                setArtist({
                  ...artist,
                  artistSpotifyId: value ? "" : null,
                });
              }}
              value={showIDFields.spotify}
            />
          </Space>
          <FormInput
            style={{
              opacity: showIDFields.spotify ? 1 : 0,
            }}
            value={artist.artistSpotifyId}
            onChange={({ target: { value } }) => {
              setArtist({ ...artist, artistSpotifyId: value });
            }}
          />
        </Col>

        <Col span={12}>
          <Space size="middle" style={{ marginBottom: 8 }}>
            <Text>Apple ID</Text>
            <RadioGroup
              name="apple"
              value={showIDFields.apple}
              onChange={({ target: { value } }) => {
                setArtist({
                  ...artist,
                  artistAppleId: value ? "" : null,
                });
              }}
            />
          </Space>
          <FormInput
            style={{
              opacity: showIDFields.apple ? 1 : 0,
            }}
            value={artist?.artistAppleId}
            onChange={({ target: { value } }) => {
              setArtist({ ...artist, artistAppleId: value });
            }}
          />
        </Col>
      </Row>
      {artist?.artistLocals.map((local, index) => (
        <Card style={{ ...sharedStyles, padding: 0 }}>
          <Row justify="space-between" align="middle" gutter={[16, 16]}>
            <Col span={12}>
              <FormInput label="Local name" />
            </Col>
            <Col span={12}>
              <FormSelect
                options={languages.map(languageMapper)}
                label="Local langauge"
              />
            </Col>
            <Tooltip arrow={false} title="Delete">
              <Button
                onClick={() => {
                  handleDeleteLocal(index);
                }}
                style={{ position: "absolute", top: 0, right: 0 }}
                danger
                type="text"
                icon={<DeleteOutlined />}
              ></Button>
            </Tooltip>
          </Row>
        </Card>
      ))}
      <Button onClick={handleAdd} icon={<PlusCircleFilled />} type="text">
        Add language
      </Button>
    </Form>
  );
};

export default ArtistModalContent;
