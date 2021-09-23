import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import paulResume from "../Docs/PaulKaseta.pdf";
import "./Resume.css";

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={paulResume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="pageButtons">
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button
          onClick={() => {
            if (pageNumber > 1) {
              setPageNumber(pageNumber - 1);
            }
            return;
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            if (pageNumber < 3) {
              setPageNumber(pageNumber + 1);
            }
            return;
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Resume;
