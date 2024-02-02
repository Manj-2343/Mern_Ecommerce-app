import React from "react";
import Layout from "../component/Layout/Layout";
import { useSearch } from "../Context/search";
import { Button, Card } from "antd";


const { Meta } = Card;
const Search = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search-Results"}>
      <div className="container-fluid">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Product Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <Card
                key={p._id}
                hoverable
                style={{ width: "40vh", height: "60vh" }}
                cover={
                  <img
                    alt={p.name}
                    // src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                  />
                }
                className="m-2"
              >
                <Meta
                  title={p.name}
                  description={
                    <span>
                      <strong>${p.price}</strong> -{" "}
                      {p.description && p.description.length > 30
                        ? `${p.description.substring(0, 30)}...`
                        : p.description}
                    </span>
                  }
                  style={{ maxHeight: "40%", overflow: "hidden" }}
                />
                <Button type="primary" gap="small" className="m-2">
                  More Details
                </Button>
                <Button type="primary" danger>
                  Add to Cart
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
