import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function SliderItem({ slideLength, slideSpeed, curIndex }) {
  const [slideData, setSlideData] = useState([]);

  const getData = async () => {
    const res = await fetch(`http://3.131.35.195:8000/companies/premium`);
    const dataList = await res.json();
    setSlideData([...dataList.company_list]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Sliderlist
      slideLength={slideLength}
      slideSpeed={slideSpeed}
      curIndex={curIndex}
    >
      <Slide>
        <a href="#">
          <SlideImg
            imgUrl={
              slideData.length && slideData[slideData.length - 1].banner_url
            }
          >
            <SlideContent>
              <div>
                <h2>
                  {slideData.length &&
                    slideData[slideData.length - 1].company_name}
                </h2>
                <h3>
                  {slideData.length && slideData[slideData.length - 1].title[0]}
                </h3>
                <h3>
                  {slideData.length && slideData[slideData.length - 1].title[1]}
                </h3>
              </div>
              <hr />
              <button>
                <span>바로가기</span>
                <ChevronRightIcon
                  style={{
                    position: "relative",
                    top: "4px",
                    fontSize: "20px",
                    marginLeft: "4px",
                  }}
                />
              </button>
            </SlideContent>
          </SlideImg>
        </a>
      </Slide>
      {slideData.length &&
        slideData.map((el) => {
          return (
            <Slide key={el.title_id}>
              <a href="#">
                <SlideImg imgUrl={el.banner_url}>
                  <SlideContent>
                    <div>
                      <h2>{el.company_name}</h2>
                      <h3>{el.title[0]}</h3>
                      <h3>{el.title[1]}</h3>
                    </div>
                    <hr />
                    <button>
                      <span>바로가기</span>
                      <ChevronRightIcon
                        style={{
                          position: "relative",
                          top: "4px",
                          fontSize: "20px",
                          marginLeft: "4px",
                        }}
                      />
                    </button>
                  </SlideContent>
                </SlideImg>
              </a>
            </Slide>
          );
        })}
      <Slide>
        <a href="#">
          <SlideImg imgUrl={slideData.length && slideData[0].banner_url}>
            <SlideContent>
              <div>
                <h2>{slideData.length && slideData[0].company_name}</h2>
                <h3>{slideData.length && slideData[0].title[0]}</h3>
                <h3>{slideData.length && slideData[0].title[1]}</h3>
              </div>
              <hr />
              <button>
                <span>바로가기</span>
                <ChevronRightIcon
                  style={{
                    position: "relative",
                    top: "4px",
                    fontSize: "20px",
                    marginLeft: "4px",
                  }}
                />
              </button>
            </SlideContent>
          </SlideImg>
        </a>
      </Slide>
    </Sliderlist>
  );
}

const Sliderlist = styled.ul`
  display: flex;
  height: 100%;
  width: calc(100vw * ${(props) => props.slideLength});
  transition: ${(props) => props.slideSpeed}ms;
  transform: translate3d(-${(props) => props.curIndex * 100}vw, 0, 0);
`;

const Slide = styled.li`
  width: 100vw;
  height: 100%;
`;

const SlideImg = styled.div`
  position: relative;
  background-image: url(${(props) => props.imgUrl});
  width: 100%;
  height: 300px;
  background-position: 50%;
  background-size: cover;
`;

const SlideContent = styled.div`
  position: absolute;
  bottom: 20px;
  left: calc((100% - 1060px) / 2);
  width: 340px;
  border-radius: 3px;
  background-color: #fff;
  padding: 20px 30px 14px;
  z-index: 100;

  h2 {
    font-size: 22px;
    font-weight: 600;
    line-height: 1.4;
    word-break: keep-all;
    text-align: left;
    color: #333;
    margin-bottom: 5px;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  h3 {
    position: relative;
    font-size: 14px;
    font-weight: 600;
    max-height: 42px;
    line-height: 1.4;
    word-break: keep-all;
    text-align: left;
    color: #666;
    margin-bottom: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  hr {
    margin: 0 -30px 14px;
    border: 0;
    border-top: 1px solid #eee;
  }

  button {
    font-size: 15px;
    font-weight: 600;
    text-align: left;
    color: #258bf7;
    width: 100%;
    cursor: pointer;
    height: 24px;
    margin: 0;
    padding: 0;
    border: 0;
    background: none;

    &:focus {
      outline: none;
    }

    span {
      position: relative;
      top: -1px;
    }
  }
`;

export default SliderItem;
