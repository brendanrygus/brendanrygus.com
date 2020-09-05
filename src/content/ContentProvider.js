import React from "react";
import { pathOr } from "ramda";

import content from "./content";

const ContentContext = React.createContext({});

export const ContentProvider = ({ children }) => (
  <ContentContext.Provider value={content}>{children}</ContentContext.Provider>
);

export const useContent = () => React.useContext(ContentContext);

export const Content = ({ id }) => {
  const content = useContent();
  const getContentById = React.useCallback(
    id => {
      if (!id || typeof id !== "string") {
        console.error("Invalid content key!", id);
        return "";
      }
      const key = id.split(".");
      return pathOr("", key, content);
    },
    [content]
  );

  return getContentById(id);
};
