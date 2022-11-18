import { Col, Image, Pagination, Row, Spin } from "antd";
/**
 The goal of this challenge is to populate a list with data from a given API.
 Here are more specific requirements:
 
 0. Fetch data (JSON) from API on component mount, create links for the first 10 images.
  1. Each link should direct to a route with an ID URL parameter
  2. The new route should display the image with that matching ID, and provide a back button to go back to the list.

  Bonus points:
  Using any CSS framework, improve the layout and styling,
  and make it somewhat responsive to the browser size.
  */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const url = "https://jsonplaceholder.typicode.com/photos";
const pageSize = 12;
export default function TestFour() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // current page
  const [index, setIndex] = useState({
    min: 0,
    max: pageSize,
  });
  useEffect(() => {
    dummyData();
  }, []);
  const dummyData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "GET",
      });
      const fakeData = await response.json();
      console.log(fakeData);
      setLoading(false);

      setData(fakeData);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleChange = (page) => {
    setCurrentPage(page);
    setIndex({
      min: (page - 1) * pageSize,
      max: page * pageSize,
    });
  };
  return (
    <div>
      <h2>Test Four</h2>
      {loading ? <Spin style={{ marginBottom: "50px" }} /> : null}
      <Row>
        {data?.map(
          (e, i) =>
            i >= index.min &&
            i < index.max && (
              <Col key={i} lg={6} md={8} sm={12} xs={24}>
                {e.id <= 10 ? (
                  <Link to={"/4/" + e.id} state={{ imgURL: e.url }}>
                    <Image
                      preview={false}
                      style={{ padding: "4%", cursor: "pointer" }}
                      width={200}
                      src={e.thumbnailUrl}
                    />
                  </Link>
                ) : (
                  <Image
                    preview={false}
                    style={{ padding: "4%" }}
                    width={200}
                    src={e.thumbnailUrl}
                  />
                )}
                <p>{e.id}</p>
              </Col>
            )
        )}{" "}
      </Row>
      {data.length > 0 ? (
        <Pagination
          showSizeChanger={false}
          current={currentPage}
          total={data.length}
          pageSize={pageSize}
          onChange={handleChange}
          hideOnSinglePage={true}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "20px",
          }}
        />
      ) : null}
      {/*  Your Code...  */}
    </div>
  );
}
