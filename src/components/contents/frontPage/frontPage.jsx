import React from 'react'
import './front.css'
import { Form, Input, Select } from 'antd'
export function Slides() {
  return (
    <div className='mainSlide'>
      <div className='formDetails'>
      <Form labelCol={{span:5}} wrapperCol={{span:15}}>
      <Form.Item label="Select">
          <Select>
            <Select.Option value="Slides">Slides</Select.Option>
            <Select.Option value="Shop By Category">Shop By Category</Select.Option>
            <Select.Option value="Best-Sellers">Best-Sellers</Select.Option>
            <Select.Option value="Feature Products">Feature Products</Select.Option>
          </Select>
        </Form.Item>
      <Form.Item label='Cake Name'>
      <Input/>
      </Form.Item>
      <Form.Item label='Price'>
      <Input/>
      </Form.Item>
      <button>Submit</button>
      </Form>
      </div>
      <div className='imgUpload'></div>
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

