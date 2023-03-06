import { notification } from "antd";

const useNotify = () => {
  const [api, context] = notification.useNotification();
  function callNotification() {
    function callNotification(
      message: string,
      variant: "success" | "error" = "success"
    ) {
      api[variant]({
        placement: "bottomRight",
        message,
        duration: 2,
      });
    }
  }
  return [context, callNotification];
};
export default useNotify;
