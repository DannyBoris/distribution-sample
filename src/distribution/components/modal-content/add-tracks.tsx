import { Avatar, Form, Select, Space } from "antd";
import { useState } from "react";
import { dummy_track } from "../../utils/dummy-data";
import FormSelect from "../shared/form-select";
const tracks = [
  dummy_track("Let it be yo1", 1, "R+F"),
  dummy_track("Let it be yo2", 2, "B+A"),
  dummy_track("Let it be yo4", 3, "G+F"),
  dummy_track("Let it be yo5", 4, "R+H"),
  dummy_track("Let it be yo6", 5, "Z+F"),
];

const AddTrackModalContent = ({ onSave }) => {
  const [selectedTracks, setSelectedTracks] = useState([]);

  return (
    <Form onSubmitCapture={() => onSave(selectedTracks)} id="add-tracks">
      <FormSelect
        labelInValue
        multiSelect
        onChange={setSelectedTracks}
        customOptions={tracks.map((item) => (
          <Select.Option value={item.id} label={item.name}>
            <Space size="middle">
              <span>{item.name}</span>
              <Space>
                {item.revisions.split("+").map((r) => (
                  <Avatar size="small">{r}</Avatar>
                ))}
              </Space>
            </Space>
          </Select.Option>
        ))}
      ></FormSelect>
    </Form>
  );
};

export default AddTrackModalContent;
