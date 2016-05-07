require('normalize.css/normalize.css');
require('styles/App.scss');


import React from 'react';



// 获取图片数据
var imageDatas = require('../data/imageData.json');





imageDatas = (function genImageUrl(imageDataArr) {
  for (let i = 0,j = imageDataArr.length; i<j; i++) {
    var singleImageData = imageDataArr[i];
    singleImageData.imageUrl = require('../images/'+singleImageData.filename);
    imageDataArr[i] = singleImageData;

  }
  console.log(imageDataArr);
  return imageDataArr;
})(imageDatas);





class AppComponent extends React.Component {
  render() {
    return (
    <section className="stage">
      <section className="img-sec"></section>
      <nav className="controller-nav"></nav>

    </section>


      // <div className="index">
      //   <img src={yeomanImage} alt="Yeoman Generator" />
      //   <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      // </div>
    )
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
