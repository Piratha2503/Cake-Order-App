    import { PlusOutlined } from '@ant-design/icons';
    import React, { useState } from 'react';
    import {
    Button,
    Cascader,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Slider,
    Switch,
    TreeSelect,
    Upload,
    } from 'antd';
    const { RangePicker } = DatePicker;
    const { TextArea } = Input;
    const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
    };
   
    const FormDisabledDemo = () => {
    const [componentDisabled, setComponentDisabled] = useState(false);
    return (
        <>
        <Checkbox
            checked={componentDisabled}
            onChange={(e) => setComponentDisabled(e.target.checked)}
        >
            Form disabled
        </Checkbox>
        <Form
            labelCol={{
            span: 10,
            }}
            wrapperCol={{
            span: 50,
            }}
            layout="horizontal"
            disabled={componentDisabled}
            style={{
            maxWidth: 600,
            }}
            onFinish={async(e)=>{console.log(e);
           e.range.map((a)=>console.log(a.$d))

            }}
        >
            <Form.Item label="Checkbox" name="test" valuePropName="checked">
            <Checkbox>Checkbox</Checkbox>
            </Form.Item>
            <Form.Item label="Radio" name='myRadio'>
            <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
            </Radio.Group>
            </Form.Item>
            <Form.Item label="Input" name='input'>
            <Input />
            </Form.Item>
            <Form.Item label="Select" name='select'>
            <Select>
                <Select.Option value="demo">Demo</Select.Option>
            </Select>
            </Form.Item>
            <Form.Item label="TreeSelect" name='treeSelect'>
            <TreeSelect
                treeData={[
                {
                    title: 'Light',
                    value: 'light',
                    children: [
                    {
                        title: 'Bamboo',
                        value: 'bamboo',
                    },
                    ],
                },
                ]}
            />
            </Form.Item>
            <Form.Item label="Cascader" name='casCader'>
            <Cascader
                options={[
                {
                    value: 'zhejiang',
                    label: 'Zhejiang',
                    children: [
                    {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                    },
                    ],
                },
                ]}
            />
            </Form.Item>
            <Form.Item label="DatePicker" name='date'>
            <DatePicker />
            </Form.Item>
            <Form.Item label="RangePicker" name='range'>
            <RangePicker />
            </Form.Item>
            <Form.Item label="InputNumber" name='Number'>
            <InputNumber />
            </Form.Item>
            <Form.Item label="TextArea" name='Area'>
            <TextArea rows={4} />
            </Form.Item>
            <Form.Item label="Switch" valuePropName="checked" name='Switch'>
            <Switch />
            </Form.Item>
            <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile} name='upload'>
            <Upload action="/upload.do" listType="picture-card">
                <div>
                <PlusOutlined />
                <div
                    style={{
                    marginTop: 8,
                    }}
                >
                    Upload
                </div>
                </div>
            </Upload>
            </Form.Item>
            <Form.Item label="Button">
            <Button htmlType='submit'>Button</Button>
            </Form.Item>
            <Form.Item label="Slider">
            <Slider />
            </Form.Item>
        </Form>
        </>
    );
    };
    export default () => <FormDisabledDemo />;