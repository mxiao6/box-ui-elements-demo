// Not needed unless working with non "en" locales
// import { addLocaleData } from 'react-intl';
// import enLocaleData from 'react-intl/locale-data/en';

import React from "react";
import ContentUploader from "box-ui-elements/es/elements/content-uploader";
import App from "./App";
import { IntlProvider } from "react-intl";
// import 'box-ui-elements/dist/explorer.css';

// Not needed unless working with non "en" locales
// addLocaleData(enLocaleData);

const token = "";
const folderId = "0";

const Main = () => (
    <App>
        <IntlProvider locale="en" textComponent={React.Fragment}>
            <ContentUploader rootFolderId={folderId} token={token} />
        </IntlProvider>
    </App>
);

export default Main;
