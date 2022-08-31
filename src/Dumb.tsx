import React, { useState } from "react";
import { CreateBuyerSiteModal } from "@saleshood/ui-kit";
import { useQuery } from 'react-query'
import { Button } from "antd";

export const Dumb = () => {
  const [modal, setModal] = useState(false);
  const a = useQuery('a', 'a','a')
  return (
    <div>
      {a.toString()}
      <Button onClick={() => setModal(true)}>show the shit</Button>
      <CreateBuyerSiteModal
        uploadToS3ForBuyerSiteLogo={() => {}}
        onSubmit={() => {}}
        onCancel={() => setModal(false)}
        visible={modal}
      />
    </div>
  );
};
