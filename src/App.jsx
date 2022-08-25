import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import CloseOutlined from "@ant-design/icons/CloseOutlined";
import "./i18n/init";
import "./App.css";
import styled from "styled-components";

const Wrapper = styled.div``;

function App() {
  const [count, setCount] = useState(0);
  const { t: buyerSitesT } = useTranslation("buyer-sites");
  const successfulMessage = (
    <Trans
      t={buyerSitesT}
      i18nKey="SHARE_VIA_BUYER_SITE_DIALOG.NOTIFICATION.SUCCESS_MESSAGE"
      values={{
        count: 1,
        ASSET_NAME: "Something",
        BS_NAME: "Umberella",
      }}
    />
  );
  const faWidth = 352;
  const faHeight = 512;
  const antWidth = 896;
  const antHeight = 896;
  return (
    <div className="App">
      {successfulMessage}
      <div>
        <CloseOutlined />
      </div>
      <div>
        <svg width="1rem" fill="cyan" height="1rem" viewBox="64 64 894 894">
          <path
            style={{
              transform: `scale(2)`,
              transformOrigin: `${64 + antWidth / 2}px ${64 + antHeight / 2}px`,
            }}
            d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
          />
        </svg>
        <svg width="1rem" fill="red" height="1rem" viewBox="0 0 352 512">
          <path
            style={{
              transform: `rotate(45deg) scale(2)`,
              transformOrigin: "center center",
            }}
            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
          />
        </svg>
      </div>
      <div>
        <svg
          fill="red"
          style={{
            border: "1px solid red",
            // transformOrigin: 'center center',
          }}
          width="1rem"
          height="1rem"
          viewBox="64 64 894 894"
        >

            <path
              style={{
                // transform: `scale(${antWidth / faWidth})`,
                transform: `translate(${64 + (894 - 352) / 2}px, ${
                  64 + (894 - 512) / 2
                }px) `,
                transform: ` scale(2.54) translate(${64 + (894 - 352) / 2}px, ${
                  64 + (894 - 512) / 2
                }px)`,
                // transform: `translate(64px) scale(2.54) translate(${-64 * 2.54}px)`,
                // transform: `translate(64px)`,
                // transform: `scale(2.54)`,

                // transform: `scale(2.54)`,
                // transform: `rotate(-45deg) `,
                // transformOrigin: `-64px -64px`,
                transformOrigin: `${64 + antWidth / 2}px ${
                  64 + antHeight / 2
                }px`,
              }}
              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            />
     
        </svg>
        <svg
          fill="green"
          style={{
            border: "1px solid red",
            // transformOrigin: 'center center',
          }}
          width="1rem"
          height="1rem"
          viewBox="64 64 894 894"
        >

            <path
              style={{
                // transform: `scale(${antWidth / faWidth})`,
                transform: `translate(${64 + (894 - 352) / 2}px, ${
                  64 + (894 - 512) / 2
                }px) `,
                transform: ` scale(2) translate(${64 + (894 - 512) / 2}px, ${
                  64 + (894 - 512) / 2
                }px)`,
                // transform: `translate(64px) scale(2.54) translate(${-64 * 2.54}px)`,
                // transform: `translate(64px)`,
                // transform: `scale(2.54)`,

                // transform: `scale(2.54)`,
                // transform: `rotate(-45deg) `,
                // transformOrigin: `-64px -64px`,
                transformOrigin: `${64 + antWidth / 2}px ${
                  64 + antHeight / 2
                }px`,
              }}
              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
            />
     
        </svg>
      </div>
    </div>
  );
}

export default App;
