import React, { useState } from 'react'
import './front.css'
import { Form, Input, Select } from 'antd'
import axios from 'axios'
import { useEffect } from 'react'
import ImgCrop from 'antd-img-crop';
import { Button } from 'react-bootstrap'
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';


const finish = async (e)=>{
  const Price = Number(e.price)
  const Name = e.name
  const Category = e.category

  const entry = {
    "name":Name,
    "price":Price,
    "view":Category
  } 

  const saveDetails = async ()=>{
      const Res = await axios.post('http://localhost:8095/cake-orders/api/v1/designs',entry)
                                  .then(response=>console.log(response.data))
  }
 
  console.log("Name:-"+Name)
  console.log("Price:- "+Price)
  console.log("Category:-"+Category)

  saveDetails();
}

export function Slides() {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
  
    const beforeUpload = (file) => {
      const isJpg = file.type === 'image/jpeg';
  
      if (!isJpg) {
        message.error('You can only upload JPEG files!');
      }
  
      return isJpg;
    };
  
    const handleChange = (info) => {
      if (info.file.status === 'uploading') {
        setLoading(true);
        return;
      }
  
      if (info.file.status === 'done') {
        // Get the image URL from the response
        setImageUrl(info.file.response.url);
        setLoading(false);
      }
    };
  
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
  return (
    <div className='mainSlide'>
      <div className='formDetails'>
      <Form labelCol={{span:5}} wrapperCol={{span:15}} onFinish={finish} size='large'>
      <Form.Item label="Select" name='category'>
          <Select >
            <Select.Option value="slideShow" name='select'>Slides</Select.Option>
            <Select.Option value="Shop Category">Shop By Category</Select.Option>
            <Select.Option value="Best Sellers">Best-Sellers</Select.Option>
            <Select.Option value="Feature Products">Feature Products</Select.Option>
          </Select>
        </Form.Item>
      <Form.Item label='Cake Name' name='name'>
      <Input/>
      </Form.Item>
      <Form.Item label='Price' name='price'>
      <Input type='number'/>
      </Form.Item>
      <Form.Item label=' ' labelCol={{span:10}}>
      <Button variant="primary" htmltype='submit'>Save</Button>
      </Form.Item>
      </Form>
      </div>
      <div className='imgUpload'>
      <ImgCrop rotationSlider>
      <Upload
      name="file"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action="http://localhost:8095/cake-orders/api/imgcheck"
      beforeUpload={beforeUpload}
      onChange={(file)=>console.log(file)}
      accept="image/jpeg"
      onPreview={(e)=>console.log(e)}
    >
      {imageUrl ? (
        <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
      ) : (
        uploadButton
      )}
    </Upload>
    </ImgCrop>
      </div>
      
    </div>
  )
}
export function ShopCategory() {
    return (
      <div>
        <h1>ShopCategory</h1>
      </div>
    )
  }
  export function BestSellers() {
    return (
      <div>
        <h1>BestSellers</h1>
      </div>
    )
  }
  export function FeatureProducts() {
    return (
      <div>
        <h1>featureProducts</h1>
      </div>
    )
  }
  export function RecentPost() {
    return (
      <div>
        <h1>RecentPost</h1>
      </div>
    )
  }

