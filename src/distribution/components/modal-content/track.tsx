import { GlobalOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Button, Col, Row, Badge, Input, RadioChangeEvent } from "antd";
import { useState } from "react";
import AppModal from "../../../components/modal";
import { sharedStyles } from "../../utils/constants";
import { getYears } from "../../utils/helper-functions";
import {
  artistMapper,
  languageMapper,
  musicStyleMapper,
  yearsMapper,
} from "../../utils/mappers";
import { Track } from "../../utils/types";
import ArtistProfileCard from "../distribution-form/artist-profile-card";
import FormInput from "../shared/form-input";
import FormSelect from "../shared/form-select";
import RadioGroup from "../shared/radio-group";
import LocalizationModalContent from "./localization";

const TrackModalContent = ({
  languages,
  trackToUpdate,
  artists,
  musicStyles,
}) => {
  const [track, setTrack] = useState<Track>(trackToUpdate);
  const [artistToUpdate, setArtistToUpdate] = useState(null);
  const [locModal, setLocModal] = useState(false);
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
        <Row>
          <Col span={24} style={sharedStyles}>
            <Form.Item required requiredMark name="artistName" label="Artist">
              {track.artistId ? (
                <ArtistProfileCard
                  id={track.artistId}
                  name={track.artistName}
                  onDeleteClick={() => {
                    setTrack({
                      ...track,
                      artistName: "",
                      artistId: "",
                      artistSpotifyId: "",
                      artistAppleId: "",
                      artistLocals: [],
                    });
                  }}
                  onClick={() =>
                    setArtistToUpdate({
                      name: track.artistName,
                      artistId: track.artistId,
                      artistSpotifyId: track.artistSpotifyId,
                      artistAppleId: track.artistAppleId,
                      artistLocals: track.artistLocals,
                    })
                  }
                />
              ) : (
                <FormSelect
                  notFoundContent={<div>Add new</div>}
                  showSearch
                  dropdownRender={(menu) => (
                    <>
                      {menu}
                      <Button
                        icon={<PlusOutlined />}
                        onClick={() =>
                          setArtistToUpdate({
                            name: track.artistName,
                            artistId: track.artistId,
                            artistSpotifyId: track.artistSpotifyId,
                            artistAppleId: track.artistAppleId,
                            artistLocals: track.artistLocals,
                          })
                        }
                      >
                        Add {track.artistName} as new
                      </Button>
                    </>
                  )}
                  onSearch={(value) =>
                    setTrack({ ...track, artistName: value })
                  }
                  onChange={(artistId) => {
                    setTimeout(() => {
                      const artist = artists.find(
                        (artist) => artist.artistId === artistId
                      );
                      setTrack({ ...track, ...artist });
                    }, 1000);
                  }}
                  options={artists.map(artistMapper)}
                />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} justify="space-between" style={sharedStyles}>
          <Col span={12}>
            <FormSelect
              label="Primary music genre"
              size="large"
              optionFilterProp="label"
              showSearch
              onChange={(id) => setTrack({ ...track, primaryMusicStyleId: id })}
              options={musicStyles.map(musicStyleMapper)}
            />
          </Col>
          <Col span={12}>
            <FormSelect
              label="Secondary music genre"
              size="large"
              optionFilterProp="label"
              labelInValue
              showSearch
              onChange={(e) => console.log(e)}
              options={musicStyles.map(musicStyleMapper)}
            />
          </Col>
        </Row>
        <Col style={sharedStyles}>
          <Form.Item required requiredMark label="Copyrights">
            <Row gutter={16} wrap={false}>
              <Col span={6}>
                <FormSelect
                  options={getYears(72).map(yearsMapper)}
                  placeholder="Select year"
                />
              </Col>
              <Col span={18}>
                <FormInput placeholder="Name of individual/entity" />
              </Col>
            </Row>
          </Form.Item>
          <Input.Group>
            <Form.Item required requiredMark label="Copyrights">
              <Row gutter={16} wrap={false}>
                <Col span={6}>
                  <FormSelect
                    options={getYears(72).map(yearsMapper)}
                    placeholder="Select year"
                  />
                </Col>
                <Col span={18}>
                  <FormInput placeholder="Name of individual/entity" />
                </Col>
              </Row>
            </Form.Item>
          </Input.Group>
        </Col>
        <Col style={sharedStyles}>
          <Form.Item label="Do you already have an ISRC?">
            <RadioGroup
              name="upc"
              id="upc"
              value={track.isrc === ""}
              onChange={(e: RadioChangeEvent) => {
                setTrack({
                  ...track,
                  isrc: e.target.value ? "" : null,
                });
              }}
            />
          </Form.Item>
          {track.isrc === "" && (
            <Form.Item requiredMark required label="Enter ISRC code">
              <FormInput placeholder="Enter ISRC" />
            </Form.Item>
          )}
        </Col>
        <Row>
          <Col span={24} style={sharedStyles}>
            <FormSelect
              required
              placeholder="Select a language"
              name="languageId"
              label="Metadata Language"
              optionFilterProp="label"
              showSearch
              options={languages.map(languageMapper)}
              onChange={(id) => setTrack({ ...track, languageId: id })}
            />
          </Col>
        </Row>
        <Row style={sharedStyles}>
          <Col>
            <Form.Item label="Explicit lyrics?">
              <RadioGroup
                onChange={({ target: { value } }) =>
                  setTrack({ ...track, explicit: value })
                }
                value={track.explicit}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row style={sharedStyles}>
          <Col span={24}>
            <Form.Item label="Lyrics">
              <Input.TextArea style={{ resize: "none" }} rows={8} />
            </Form.Item>
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
