import { useState } from "react";
import "antd/dist/antd.css";
import "./ds-index.css";
import "./i18n/init";
import "./App.css";
import { Modal, Button, ConfigProvider, notification } from "antd";

ConfigProvider.config({
  prefixCls: "ds",
  iconPrefixCls: "dsicon",
});

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <ConfigProvider prefixCls="ds" iconPrefixCls="dsicon">
        <div style={{
          marginBottom: 8,
        }}>
        <Button Button type="primary" onClick={() => {
          notification.success({
            message: 'Success',
            description: 'Notice the close icon'
          })
        }}>
          Open static notification
        </Button>
        </div>

        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </ConfigProvider>
    </>
  );
}

export default App;
