import React from 'react'
import { Form, Input } from 'antd'
import { Inbox } from 'react-bootstrap-icons'
import '../../syle/styling.css'
import { useNavigate } from 'react-router-dom'
function DesignAddEdit() {
  const navigate = useNavigate();
  return (
    <div className='designCards'>
    <div className="card">
    <div className="card-details">
      <p className="text-title">Slide Show</p>
      <p className="text-body">Here are the details of the card</p>
    </div>
    <button className="card-button" onClick={()=>navigate('/designs/slides')}>Add / Edit</button>
  </div>
  <div className="card">
    <div className="card-details">
      <p className="text-title">Shop Category</p>
      <p className="text-body">Here are the details of the card</p>
    </div>
    <button className="card-button" onClick={()=>navigate('/designs/shop')}>Add / Edit</button>
  </div>
  <div className="card">
    <div className="card-details">
      <p className="text-title">Best Sellers</p>
      <p className="text-body">Here are the details of the card</p>
    </div>
    <button className="card-button" onClick={()=>navigate('/designs/sellers')}>Add / Edit</button>
  </div>
  <div className="card">
    <div className="card-details">
      <p className="text-title">Feature Products</p>
      <p className="text-body">Here are the details of the card</p>
    </div>
    <button className="card-button" onClick={()=>navigate('/designs/featureProducts')}>Add / Edit</button>
  </div>
  <div className="card">
    <div className="card-details">
      <p className="text-title">Recent Posts</p>
      <p className="text-body">Here are the details of the card</p>
    </div>
    <button className="card-button" onClick={()=>navigate('/designs/recent')}>Add / Edit</button>
  </div>
  
    </div>
  )
}

export default DesignAddEdit
/*
import ImgCrop from 'antd-img-crop';
import React, { useState } from 'react';
import { Upload } from 'antd';
const App = () => {
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <ImgCrop rotationSlider>
      <Upload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 5 && '+ Upload'}
      </Upload>
    </ImgCrop>
  );
};
export default App;
*/