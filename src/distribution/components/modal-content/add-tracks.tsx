import { Form } from "antd";
import { dummy_track } from "../../utils/dummy-data";
import { trackMapper } from "../../utils/mappers";
import FormSelect from "../shared/form-select";
const tracks = [dummy_track("Let it be you", 1)];
const AddTrackModalContent = () => {
  return (
    <Form>
      <FormSelect options={tracks.map(trackMapper)} />
    </Form>
  );
};

export default AddTrackModalContent;
