import { useState, useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { useSelector } from "react-redux";
import MappedList from "./MappedItems";
import "../pages/Dashboard/Products/Products.scss";
import React from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { stateFromHTML } from "draft-js-import-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const ProductInfoTab = () => {
  const { categories, businessModels, description } = useSelector(
    (state) => state.products?.data
  );

  const trlData = useSelector((state) => state.trl?.data);
  const [editorState, setEditorState] = useState("");
  const [showEditor, setShowEditor] = useState(false);
  useEffect(() => {
    setEditorState(EditorState.createWithContent(stateFromHTML(description)));
  }, [description]);

  const editdesc = () => {
    !showEditor ? setShowEditor(true) : setShowEditor(false);
  };

  return (
    <>
      <section className="tab mb-4 component-bg p-3">
        <Tabs
          defaultActiveKey="attributes"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="description" title="Description">
            {description && !showEditor && <div>{description}</div>}{" "}
            {showEditor && (
              <div>
                <button
                  onClick={editdesc}
                  style={{ border: "none", padding: "5px", marginTop: "20px" }}
                >
                  Edit
                </button>
              </div>
            )}
            {showEditor ? (
              <Editor
                defaultEditorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={() => setEditorState(editorState)}
              />
            ) : null}
          </Tab>
          <Tab eventKey="attributes" title="Attributes">
            {categories ? (
              <div>
                <MappedList header="Categories" mappedListArray={categories} />
                <MappedList
                  header="Business Models"
                  mappedListArray={businessModels}
                />{" "}
              </div>
            ) : null}
            {trlData ? (
              <div className="ps-3 product-info-select">
                <h5>TRL</h5>
                <select>
                  {trlData.map((item) => (
                    <option key={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>
            ) : null}
          </Tab>
        </Tabs>
      </section>
    </>
  );
};
export default ProductInfoTab;
