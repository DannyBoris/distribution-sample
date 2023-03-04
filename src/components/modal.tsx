import { Button, Modal } from "antd";

interface Props {
  content: JSX.Element;
  open: boolean;
  setOpen: (value: boolean) => void;
  title: string;
  formId?: string;
  fullScreen?: boolean;
}

const AppModal = ({
  content,
  open,
  setOpen,
  title,
  formId,
  fullScreen,
}: Props) => {
  return (
    <Modal
    onCancel={()=>setOpen(false)}
      destroyOnClose
      width={fullScreen ? "100vw" : 800}
      style={{ height: fullScreen ? "100vh" : 600 }}
      bodyStyle={{
        height: fullScreen ? "100vh" : 600,
        overflow: "scroll",
      }}
      open={open}
      title={title}
      footer={[
        <Button onClick={() => setOpen(false)} type="text">
          Cancel
        </Button>,
        <Button
          size="large"
          style={{ width: 100 }}
          htmlType="submit"
          form={formId}
        >
          Save
        </Button>,
      ]}
    >
      {content}
    </Modal>
  );
};

export default AppModal;
