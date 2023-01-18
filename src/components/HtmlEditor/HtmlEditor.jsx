import React, { useState, useEffect } from "react";
import { getHtmlEditorData } from "../../api/getData";
import { COMPONENT_HTML_EDITOR } from "../../constants/componentTypes";

function HtmlEditor({ componentID }) {
  const [loading, setLoading] = useState(true);
  const [editor, setEditor] = useState("");

  useEffect(() => {
    getHtmlEditorData(setEditor, COMPONENT_HTML_EDITOR, componentID, setLoading);
  },[componentID]);

  return (
    <>
      {!loading &&
        <div
          dangerouslySetInnerHTML={{
            __html: editor,
          }}
        />
      }
    </>
  );
}

export default HtmlEditor;
