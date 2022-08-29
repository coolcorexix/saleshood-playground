import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import CloseOutlined from "@ant-design/icons/CloseOutlined";
import "./i18n/init";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const { t: buyerSitesT} = useTranslation('buyer-sites');
  const infoMessage = (
    <Trans
      t={buyerSitesT}
      i18nKey='SHARE_VIA_BUYER_SITE_DIALOG.NOTIFICATION.INFO_SHARED_MESSAGE'
      values={{
        count: 1,
        BS_NAME: "Umberella",
      }}
    />
  );

  return (<div>
    {infoMessage}
    <div>
    <button onClick={() => setCount(count +1)} >
      +
    </button>
    </div>

  </div>)
}

export default App;
