import Footer from "../Components/Footer";
import Form from "../Components/Form";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";

import "./App.css";
import PostList from "../Components/PostList";
import { useState } from "react";
import PostListProvider from "../store/post-list-store";
export default function App() {
  const [selectedTab, setSelectedTab] = useState("createPost");
  return (
    <PostListProvider>
      <div id="container">
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <PostList /> : <Form />}

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}
