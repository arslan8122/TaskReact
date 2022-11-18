import { Image } from "antd";
import React, { Fragment } from "react";
import { useParams, useLocation, Link } from "react-router-dom";

const ImageShow = () => {
  const location = useLocation();
  const { id } = useParams();
  const imgURL = location.state?.imgURL;
  return (
    <Fragment>
      <Image
        style={{ padding: "4%", cursor: "pointer" }}
        width={500}
        src={imgURL}
      />
      <br />
      <Link to="/4">GO BACK</Link>
    </Fragment>
  );
};

export default ImageShow;
