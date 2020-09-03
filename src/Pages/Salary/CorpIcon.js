import React, { Component } from 'react';
import styled from 'styled-components';

class CorpIcon extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    fetch(`/data/salary/salary.json`)
    .then((res) => res.json())
    .then((res) => this.setState({ data: res.salary }))
  }

  createView = (corpIcon) => {
      let img = corpIcon.img;
      let imgKey = Object.keys(img);
      return imgKey.map((key, imgKey) => {
        return <CorpIcons key={imgKey} style={{background: `url(${img[key]}) center / cover`}}/>;
      })
  }

  render() {
    const { corpIcon } = this.state.data;
    return (
      <Container>
          {corpIcon && this.createView(corpIcon)}
          <Last>+3989</Last>
      </Container>
    );
  }
}

export default CorpIcon;

const Container = styled.div `
  display: flex
`

const CorpIcons = styled.div `
  width: 48px;
  height: 48px;
  margin: 0 6px;
  border: 1px solid #eee;
  border-radius: 3px;
  float: left;
`
const Last = styled.div `
  min-width: 48px;
  margin: auto;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  line-height: 48px;
  color: #999;
  background: #f8f8fa;
  border: none;
  list-style: none;
`