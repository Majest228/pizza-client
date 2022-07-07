import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={300}
    height={580}
    viewBox="0 0 300 580"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="70" y="69" rx="0" ry="0" width="0" height="53" />
    <rect x="11" y="11" rx="0" ry="0" width="300" height="300" />
    <rect x="12" y="345" rx="0" ry="0" width="110" height="30" />
    <rect x="12" y="396" rx="0" ry="0" width="240" height="41" />
    <rect x="21" y="486" rx="0" ry="0" width="148" height="47" />
    <rect x="218" y="492" rx="0" ry="0" width="75" height="39" />
  </ContentLoader>
);

export default MyLoader;
