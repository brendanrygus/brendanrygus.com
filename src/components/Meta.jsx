import React from "react";
import { Helmet } from "react-helmet-async";
import { useContent } from "content";

export const Meta = ({ children, description, title }) => {
  const { meta } = useContent();
  return (
    <Helmet title={`${title} ${meta.titleDecorator}`}>
      {description && <meta name="description" content={description} />}
      {children}
    </Helmet>
  );
};
