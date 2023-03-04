import {
  DeleteOutlined,
  GlobalOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  Form,
  Input,
  Radio,
  RadioChangeEvent,
  Row,
  Select,
  Typography,
  DatePicker,
  TimePicker,
  Badge,
  Affix,
  Card,
  Avatar,
  Space,
  Tooltip,
  Checkbox,
  Divider,
} from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppModal from "../../components/modal";
import ArtistModalContent from "../components/modal-content/artist";
import LocalizationModalContent from "../components/modal-content/localization";
import ReleaseLivePreview from "../components/distribution-form/release-live-preview";
import FormInput from "../components/shared/form-input";
import FormSelect from "../components/shared/form-select";
import RadioGroup from "../components/shared/radio-group";
import UploadImageContainer from "../components/distribution-form/upload-image-container";
import { dummary_artist, dummy_release } from "../utils/dummy-data";
import { getYears } from "../utils/helper-functions";
import {
  artistMapper,
  contributorRoleMapper,
  countryMapper,
  languageMapper,
  musicStyleMapper,
  yearsMapper,
} from "../utils/mappers";
import { Artist, DistributionOptions, Release, Track } from "../utils/types";
import TrackModalContent from "../components/modal-content/track";
import { sharedStyles } from "../utils/constants";
import { Container } from "../components/test-container";
import "./distribution-form.css";
import ArtistProfileCard from "../components/distribution-form/artist-profile-card";

const DistributionForm = () => {
  const { Title, Text } = Typography;
  const [commonData, setCommonData] = useState<any>(null);
  const [artistToUpdate, setArtistToUpdate] = useState<Artist | null>(null);
  const [trackToUpdate, setTrackToUpdate] = useState<Track | null>(null);
  const [trackModal, setTrackModal] = useState<boolean>(true);
  const [distributionQueueStores, setDistributionQueueStores] = useState([]);

  const [release, setRelease] = useState<Release>({} as Release);
  const [distributionOptions, setDistributionOptions] =
    useState<DistributionOptions>({} as DistributionOptions);
  const [artists] = useState([
    dummary_artist("Danny Borisov", 1),
    dummary_artist("Jack nick", 2),
  ]);
  const [locModal, setLocModal] = useState(false);

  useEffect(() => {
    fetch(`https://staging-api.revelator.com/common/lookup/all`)
      .then((res) => res.json())
      .then(setCommonData);
  }, []);

  const params = useParams();
  useEffect(() => {
    setTimeout(() => {
      setRelease(dummy_release(params.id) as Release);
    }, 1000);
  }, []);

  return (
    commonData && (
      <>
        <Row style={{ padding: "0 70px" }}>
          <Col span={14}>
            <Title level={1}>EP | Release Details</Title>
            <Title level={4}>
              Fill in all relevant metadata fields for this release
            </Title>
            <Form colon layout="vertical">
              <Row>
                <Col span={24} style={sharedStyles}>
                  <FormInput
                    required
                    label="Release name"
                    placeholder="Enter release name"
                    name="name"
                    onChange={(e) =>
                      setRelease({ ...release, name: e.target.value })
                    }
                  />
                  <FormInput
                    placeholder="Enter release version"
                    name="version"
                    label="Release version"
                  />

                  <Button
                    style={{ float: "right" }}
                    size="large"
                    onClick={() => setLocModal(true)}
                    icon={
                      <Badge
                        size="small"
                        count={release.releasesLocals?.length}
                        style={{
                          color: "white",
                          background: "rgb(26,26,26)",
                          border: "1px solid rgb(144,144,144)",
                        }}
                      >
                        <GlobalOutlined style={{ fontSize: 22 }} />
                      </Badge>
                    }
                  >
                    <span style={{ marginLeft: 12 }}> Localize</span>
                  </Button>
                </Col>
              </Row>
              <Row style={sharedStyles}>
                <Col span={24}>
                  <Text>Tracks</Text>
                  {/* <Container tracks={release.tracks} /> */}
                </Col>
                <Col>
                  <Button icon={<PlusOutlined />}>Add track</Button>
                </Col>
              </Row>
              <Row>
                <Col span={24} style={sharedStyles}>
                  <Form.Item
                    required
                    requiredMark
                    label="Cover art"
                    valuePropName="fileList"
                  >
                    <UploadImageContainer />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={24} style={sharedStyles}>
                  <FormSelect
                    help="In what language will you be writing your titles, artist name(s) and release description?"
                    required
                    placeholder="Select a language"
                    name="languageId"
                    label="Metadata Language"
                    optionFilterProp="label"
                    showSearch
                    options={commonData.languages.map(languageMapper)}
                    onChange={(id) =>
                      setRelease({ ...release, languageId: id })
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col span={24} style={sharedStyles}>
                  <Form.Item
                    required
                    requiredMark
                    name="artistName"
                    label="Artist"
                  >
                    {release.artistId ? (
                      <ArtistProfileCard
                        id={release.artistId}
                        name={release.artistName}
                        onDeleteClick={() => {
                          setRelease({
                            ...release,
                            artistName: "",
                            artistId: "",
                            artistSpotifyId: "",
                            artistAppleId: "",
                            artistLocals: [],
                          });
                        }}
                        onClick={() =>
                          setArtistToUpdate({
                            name: release.artistName,
                            artistId: release.artistId,
                            artistSpotifyId: release.artistSpotifyId,
                            artistAppleId: release.artistAppleId,
                            artistLocals: release.artistLocals,
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
                                  name: release.artistName,
                                  artistId: release.artistId,
                                  artistSpotifyId: release.artistSpotifyId,
                                  artistAppleId: release.artistAppleId,
                                  artistLocals: release.artistLocals,
                                })
                              }
                            >
                              Add {release.artistName} as new
                            </Button>
                          </>
                        )}
                        onSearch={(value) =>
                          setRelease({ ...release, artistName: value })
                        }
                        onChange={(artistId) => {
                          setTimeout(() => {
                            const artist = artists.find(
                              (artist) => artist.artistId === artistId
                            );
                            setRelease({ ...release, ...artist });
                          }, 1000);
                        }}
                        options={artists.map(artistMapper)}
                      />
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row style={sharedStyles}>
                <Col span={24}>
                  <FormSelect
                    required
                    label="Contributors name"
                    options={artists.map(artistMapper)}
                  />
                  <FormSelect
                    required
                    label="Contributors role"
                    showSearch
                    options={commonData.contributorRoles.map(
                      contributorRoleMapper
                    )}
                  />
                  <Button icon={<PlusOutlined />}>Add contributor</Button>
                </Col>
              </Row>
              <Row gutter={16} justify="space-between" style={sharedStyles}>
                <Col span={12}>
                  <FormSelect
                    label="Primary music genre"
                    size="large"
                    optionFilterProp="label"
                    showSearch
                    onChange={(id) =>
                      setRelease({ ...release, primaryMusicStyleId: id })
                    }
                    options={commonData.musicStyles.map(musicStyleMapper)}
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
                    options={commonData.musicStyles.map(musicStyleMapper)}
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
                <Form.Item label="Previosly released?">
                  <RadioGroup
                    name="prev-released"
                    id="previouslyReleased"
                    value={release.previouslyReleased}
                    onChange={(e: RadioChangeEvent) => {
                      setRelease({
                        ...release,
                        previouslyReleased: e.target.value,
                      });
                    }}
                  />
                </Form.Item>
                {release.previouslyReleased && (
                  <Form.Item required requiredMark label="Release date">
                    <DatePicker size="large" style={{ width: "100%" }} />
                  </Form.Item>
                )}
              </Col>
              <Col style={sharedStyles}>
                <Form.Item label="Do you already have a UPC/EAN/JAN?">
                  <Radio.Group
                    name="upc"
                    id="upc"
                    value={release.upc === ""}
                    onChange={(e: RadioChangeEvent) => {
                      setRelease({
                        ...release,
                        upc: e.target.value ? "" : null,
                      });
                    }}
                  >
                    <Radio value={false}>No</Radio>
                    <Radio value={true}>Yes</Radio>
                  </Radio.Group>
                </Form.Item>
                {release.upc === "" && (
                  <Form.Item requiredMark required label="Enter UPC code">
                    <FormInput placeholder="Enter upc" />
                  </Form.Item>
                )}
              </Col>
              <Col style={sharedStyles}>
                <Form.Item label="On recrod label?">
                  <Radio.Group
                    name="label"
                    id="hasRecordLabel"
                    value={release.hasRecordLabel}
                    onChange={(e: RadioChangeEvent) => {
                      setRelease({
                        ...release,
                        hasRecordLabel: e.target.value,
                      });
                    }}
                  >
                    <Radio value={false}>No</Radio>
                    <Radio value={true}>Yes</Radio>
                  </Radio.Group>
                </Form.Item>
                {release.hasRecordLabel && (
                  <FormSelect required label="Label name" />
                )}
              </Col>
              <Col style={sharedStyles}>
                <Form.Item requiredMark required label="Release start date?">
                  <RadioGroup
                    negativeButtonText="As soon as possible"
                    positiveButtonText="On a specific date"
                    value={distributionOptions.saleStartDate === ""}
                    onChange={(e) => {
                      const isSpecificDate = e.target.value;
                      setDistributionOptions({
                        ...distributionOptions,
                        saleStartDate: isSpecificDate ? "" : null,
                      });
                    }}
                    name="start-release-date"
                  />
                  {distributionOptions.saleStartDate === "" && (
                    <Row>
                      <Col span={24}>
                        <Form.Item label="Start date">
                          <DatePicker
                            style={{ width: "100%" }}
                            placeholder="Select date"
                            size="large"
                          />
                        </Form.Item>
                        <Form.Item label="Start time">
                          <TimePicker
                            style={{ width: "100%" }}
                            placeholder="Select time"
                            size="large"
                          />
                        </Form.Item>
                        <Form.Item label="Start timezone">
                          <Select size="large" placeholder="Select timezone" />
                        </Form.Item>
                      </Col>
                    </Row>
                  )}
                </Form.Item>
              </Col>
              <Col style={sharedStyles}>
                <Form.Item label="Territories">
                  <RadioGroup
                    value={!!distributionOptions.countriesIncluded}
                    name="countries"
                    onChange={(e) =>
                      setDistributionOptions({
                        ...distributionOptions,
                        countriesIncluded: e.target.value ? [] : null,
                        countriesExcluded: e.target.value ? [] : null,
                      })
                    }
                  />

                  {distributionOptions.countriesExcluded && (
                    <Row>
                      <Col span={24}>
                        <RadioGroup
                          style={{ margin: "12px 0" }}
                          value={
                            distributionOptions.countriesCondition === "exclude"
                          }
                          positiveButtonText="Distribute everywhere exceot"
                          negativeButtonText="Distribute only in"
                          onChange={(value) => {
                            if (!value) {
                              setDistributionOptions({
                                ...distributionOptions,
                                countriesCondition: "exclude",
                                countriesExcluded: [
                                  ...(distributionOptions.countriesIncluded as []),
                                ],
                              });
                            } else {
                              setDistributionOptions({
                                ...distributionOptions,
                                countriesCondition: "include",
                                countriesIncluded: [
                                  ...(distributionOptions.countriesExcluded as []),
                                ],
                              });
                            }
                          }}
                        />
                        <FormSelect
                          onChange={(ids) => {
                            const key =
                              distributionOptions.countriesCondition ===
                              "exclude"
                                ? "countriesExcluded"
                                : "countriesIncluded";
                            setDistributionOptions({
                              ...distributionOptions,
                              [key]: ids,
                            });
                          }}
                          allowClear
                          showSearch
                          multiSelect
                          placeholder="Select Countries"
                          options={commonData.countries.map(countryMapper)}
                        />
                      </Col>
                    </Row>
                  )}
                </Form.Item>
              </Col>
              <Col style={sharedStyles}>
                <Space direction="vertical">
                  <Text>Music distribution</Text>
                  <Text>
                    Select the stores and services you would like to distribute
                    your music to
                  </Text>
                </Space>
                <Row style={{ marginTop: 20 }}>
                  <Col>
                    <Space>
                      <Checkbox
                        className="store-checkbox"
                        onChange={() => {
                          setDistributionQueueStores(
                            commonData.distributionStores.map(
                              (s) => s.distributorStoreId
                            )
                          );
                        }}
                      />
                      <Text>Select all</Text>
                    </Space>
                  </Col>
                </Row>
                {commonData.distributionStores.map(
                  (store) =>
                    store.isActive && (
                      <div>
                        <Divider />
                        <Space size="middle">
                          <Checkbox
                            className="store-checkbox"
                            id={store.distributorStoreId}
                          />
                          <Text>{store.name}</Text>
                        </Space>
                      </div>
                    )
                )}
              </Col>
            </Form>
          </Col>
          <Col span={10}>
            <Affix offsetTop={100}>
              <ReleaseLivePreview {...release} />
            </Affix>
          </Col>
        </Row>

        <AppModal
          setOpen={setLocModal}
          title="Localize"
          open={locModal}
          formId="release-locals"
          content={
            <LocalizationModalContent
            formId="release-locals"
              onSave={(newLocals) => {
                console.log(newLocals);
                setRelease({ ...release, releasesLocals: newLocals });
                setLocModal(false);
              }}
              localsToUpdate={release.releasesLocals as never[]}
              languages={commonData.languages}
            />
          }
        />
        <AppModal
          setOpen={setArtistToUpdate}
          formId="artist"
          title="Edit Artist Profile"
          open={!!artistToUpdate}
          content={
            <ArtistModalContent
              artistToUpdate={artistToUpdate}
              languages={commonData.languages}
              onSave={(newArtist) => {
                console.log({ newArtist });
              }}
            />
          }
        />
        <AppModal
          fullScreen
          setOpen={setTrackModal}
          title="Track Details"
          open={trackModal}
          content={
            <TrackModalContent
              languages={commonData.languages}
              trackToUpdate={trackToUpdate}
            />
          }
        />
      </>
    )
  );
};

export default DistributionForm;
