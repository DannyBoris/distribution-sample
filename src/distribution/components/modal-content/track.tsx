import { GlobalOutlined } from "@ant-design/icons";
import { Form, Button, Col, Row, Badge } from "antd";
import { useState } from "react";
import AppModal from "../../../components/modal";
import { sharedStyles } from "../../utils/constants";
import { Track } from "../../utils/types";
import FormInput from "../shared/form-input";
import LocalizationModalContent from "./localization";

const TrackModalContent = ({ languages, trackToUpdate }) => {
  const [track, setTrack] = useState<Track>(trackToUpdate);
  const [locModal, setLocModal] = useState(true);
  return (
    <>
      <Form layout="vertical" colon>
        <Row>
          <Col span={24} style={sharedStyles}>
            <FormInput
              required
              label="Track name"
              name="name"
              onChange={(e) => setTrack({ ...track, name: e.target.value })}
            />
            <FormInput name="version" label="Track version" />

            <Button
              style={{ float: "right" }}
              size="large"
              onClick={() => setLocModal(true)}
              icon={
                <Badge
                  title="Localize"
                  size="small"
                  count={track?.tracksLocals?.length}
                >
                  <GlobalOutlined style={{ fontSize: 22 }} />
                </Badge>
              }
            >
              Localize
            </Button>
          </Col>
        </Row>
      </Form>

      <AppModal
        setOpen={setLocModal}
        title="Localize"
        open={locModal}
        formId="track-local"
        content={
          <LocalizationModalContent
            formId="track-local"
            onSave={(newLocals) => {
              console.log(newLocals);
              setTrack({ ...track, tracksLocals: newLocals });
              setLocModal(false);
            }}
            localsToUpdate={track?.tracksLocals as never[]}
            languages={languages}
          />
        }
      />
    </>
  );
};

export default TrackModalContent;
