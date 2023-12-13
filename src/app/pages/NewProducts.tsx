import React, { useEffect, useState } from "react";
import "./NewProducts.scss";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import router, { withRouter } from "next/router";
import { Tabs, Tab } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
interface Post {
  webSettings: any;
  id: number;
  bannerImage: string;
  name: string;
  description: string;
  price: any;
  internalName: string;
}

interface Menus {
  sections: any;
  items: any;
  id: number;
  image: string;
  name: string;
  price: any;
  description: string;
}

const NewProducts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const [menus, setMenu] = useState<Menus[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/restaurant", {
          timeout: 5000, // 5 seconds timeout (adjust as needed)
        });
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchDataMenu = async () => {
      try {
        const res = await axios.get("http://localhost:4000/menu", {
          timeout: 5000, // 5 seconds timeout (adjust as needed)
        });
        setMenu(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    fetchDataMenu();
  }, []);

  return (
    <>
      <div className="container">
        <div className="stage-container">
          <div className="buy">
            <div className="buy-car">
              <h2>Carrinho</h2>
            </div>
            <div className="buy-car-zero">
              {" "}
              <h3>Seu carrinho esta vazio</h3>
            </div>
          </div>

          <div className="stage-container-large">
            <div className="images">
              {menus.map((menu) => (
                <li key={menu.id}>
                  {/* <h2>{menu.name}</h2> */}
                  {menu.sections &&
                    menu.sections.length > 0 &&
                    menu.sections[0]?.items &&
                    menu.sections[0].items.length > 0 && (
                      <Image
                        src={menu.sections[0].items[0].images[0]?.image}
                        alt={menu.sections[0].items[0].name}
                        height={100}
                        width={100}
                      />
                    )}
                </li>
              ))}

              {menus.map((menu) => (
                <li key={menu.id}>
                  {/* <h2>{menu.name}</h2> */}
                  {menu.sections &&
                    menu.sections.length > 0 &&
                    menu.sections[0]?.items &&
                    menu.sections[0].items.length > 0 && (
                      <Image
                        src={menu.sections[0].items[0].images[0]?.image}
                        alt={menu.sections[0].items[0].name}
                        height={100}
                        width={100}
                      />
                    )}
                </li>
              ))}

              {menus.map((menu) => (
                <li key={menu.id}>
                  {/* <h2>{menu.name}</h2> */}
                  {menu.sections &&
                    menu.sections.length > 0 &&
                    menu.sections[0]?.items &&
                    menu.sections[0].items.length > 0 && (
                      <Image
                        src={menu.sections[0].items[0].images[0]?.image}
                        alt={menu.sections[0].items[0].name}
                        height={100}
                        width={100}
                      />
                    )}
                </li>
              ))}
            </div>

            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3 ulno"
            >
              <Tab className="mb-3 ulna" eventKey="home" title="Burgers">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Burgers</Accordion.Header>
                    <Accordion.Body>
                      <div className="accbody">
                        {menus.map((menu) => (
                          <li key={menu.id}>
                            <div className="fifty">
                              <h2>{menu.sections[0].items[0]?.name}</h2>
                              <p>{menu.sections[0].items[0]?.description}</p>
                            </div>

                            <div className="fifty-two">
                              {menu.sections &&
                                menu.sections.length > 0 &&
                                menu.sections[0]?.items &&
                                menu.sections[0].items.length > 0 && (
                                  <Image
                                    src={
                                      menu.sections[0].items[0].images[0]?.image
                                    }
                                    alt={menu.sections[0].items[0].name}
                                    height={100}
                                    width={150}
                                  />
                                )}
                            </div>
                          </li>
                        ))}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Tab>
              <Tab className="mb-3 ulna" eventKey="profile" title="Drinks">
                <Accordion>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Drinks</Accordion.Header>
                    <Accordion.Body>
                      {menus.map((menu) => (
                        <li key={menu.id}>
                          <div className="fifty">
                            <h2>{menu.sections[0].items[0]?.name}</h2>
                            <p>{menu.sections[0].items[0]?.description}</p>
                          </div>

                          <div className="fifty-two">
                            {menu.sections &&
                              menu.sections.length > 0 &&
                              menu.sections[0]?.items &&
                              menu.sections[0].items.length > 0 && (
                                <Image
                                  src={
                                    menu.sections[0].items[0].images[0]?.image
                                  }
                                  alt={menu.sections[0].items[0].name}
                                  height={100}
                                  width={150}
                                />
                              )}
                          </div>
                        </li>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Tab>
              <Tab className="mb-3 ulna" eventKey="contact" title="Desserts">
                <Accordion>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Desserts</Accordion.Header>
                    <Accordion.Body>
                      {menus.map((menu) => (
                        <li key={menu.id}>
                          <div className="fifty">
                            <h2>{menu.sections[0].items[0]?.name}</h2>
                            <p>{menu.sections[0].items[0]?.description}</p>
                          </div>

                          <div className="fifty-two">
                            {menu.sections &&
                              menu.sections.length > 0 &&
                              menu.sections[0]?.items &&
                              menu.sections[0].items.length > 0 && (
                                <Image
                                  src={
                                    menu.sections[0].items[0].images[0]?.image
                                  }
                                  alt={menu.sections[0].items[0].name}
                                  height={100}
                                  width={150}
                                />
                              )}
                          </div>
                        </li>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProducts;
