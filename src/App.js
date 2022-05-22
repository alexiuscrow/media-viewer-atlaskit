import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import {MediaViewer} from '@atlaskit/media-viewer';
import './App.css';

const imageUri = 'https://war.ukraine.ua/wp-content/uploads/2022/03/shutterstock_2029545419-2.png';
const pdfUri = 'https://www.buds.com.ua/images/Lorem_ipsum.pdf';

function App() {
  const [imageDisplayed, setImageDisplayed] = useState(false);
  const [pdfDisplayed, setPdfDisplayed] = useState(false);

  const toggleImageMediaViewer = () => setImageDisplayed(prevState => !prevState);
  const togglePdfMediaViewer = () => setPdfDisplayed(prevState => !prevState);

  let mediaViewer = null;

  if (imageDisplayed) {
    const mediaIdentifier = {
      mediaItemType: 'external-image',
      name: 'Some image',
      dataURI: imageUri
    };
    mediaViewer = (
      <MediaViewer mediaClientConfig={{}}
                   selectedItem={mediaIdentifier}
                   dataSource={{list: [mediaIdentifier]}}
                   collectionName={''}
                   onClose={toggleImageMediaViewer}/>
    );
  } else if (pdfDisplayed) {
    const mediaIdentifier = {
      mediaItemType: 'file',
      name: 'Some PDF',
      dataURI: pdfUri
    };
    mediaViewer = (
      <MediaViewer mediaClientConfig={{}}
                   selectedItem={mediaIdentifier}
                   dataSource={{list: [mediaIdentifier]}}
                   collectionName={''}
                   onClose={togglePdfMediaViewer}/>
    );
  }

  return (
    <div className="App">
      <h3>Hello Atlassian Community</h3>

      <button onClick={toggleImageMediaViewer}>Show Image</button>
      <button onClick={togglePdfMediaViewer}>Show PDF</button>

      <IntlProvider locale="en">
        <>
          {mediaViewer}
        </>
      </IntlProvider>
    </div>
  );
}

export default App;
