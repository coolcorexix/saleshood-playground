import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { CreateBuyerSiteModal } from "@saleshood/ui-kit";
import { Modal, PageHeader } from "antd";
import "antd/dist/antd.css";
import { Dumb } from "./Dumb";
import "./i18n/init";
import "./App.css";

import { QueryClient, QueryClientProvider } from "react-query";

import "./index.css";

const routes = [
  {
    path: "content",
    breadcrumbName: "Content",
  },
  {
    path: "archived",
    breadcrumbName: "Archived",
  },
];

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false, refetchOnWindowFocus: false },
  },
});

function App() {
  const { t: buyerSitesT } = useTranslation("buyer-sites");
  const { t: uiToolkitT } = useTranslation("uiToolkit");
  const infoMessage = (
    <Trans
      t={buyerSitesT}
      i18nKey="SHARE_VIA_BUYER_SITE_DIALOG.NOTIFICATION.INFO_SHARED_MESSAGE"
      values={{
        count: 1,
        BS_NAME: "Umberella",
      }}
    />
  );
  return (
    <div>
      <div>{infoMessage}</div>
      <div>{uiToolkitT('videoRecorder.title')}</div>
    </div>
  );
}

export default App;
