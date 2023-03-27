import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/reset.css";
import "./App.css";
import { useDispatch } from "react-redux";
import { getBuckets } from "./redux/actions/bucketActions";
import Navbar from "./components/Navbar";
import BucketList from "./components/BucketList";
import CardList from "./components/CardList";
import History from "./components/History";
import NotFound from "./components/NotFound";

const { Header, Content } = Layout;

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBuckets());
    navigate("/buckets");
  }, [dispatch, navigate]);

  return (
    <Layout className="layout">
      <Header>
        <Navbar />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <Routes>
            <Route path="/buckets" element={<BucketList />} />
            <Route path="/buckets/:id" element={<CardList />} />
            <Route path="/history" element={<History />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
