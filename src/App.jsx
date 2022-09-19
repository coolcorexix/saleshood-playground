import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { PageHeader } from 'antd';
import "antd/dist/antd.css";
import "./i18n/init";
import "./App.css";

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

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
  <PageHeader
    className="site-page-header"
    title="Title"
    breadcrumb={{
      routes,
    }}
    subTitle="This is a subtitle"
  />

  </div>)
}

export default App;
