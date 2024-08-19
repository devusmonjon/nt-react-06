import { memo } from "react";
import { CatalogITem } from "../components";

const Catalog = () => {
  return (
    <div className="container">
      <CatalogITem />
    </div>
  );
};

export default memo(Catalog);
