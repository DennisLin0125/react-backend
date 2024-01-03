import { Breadcrumb, Button, Card, Form, Input, Select, Space } from "antd";
import { Link } from "react-router-dom";
import "./index.scss"

const { Option } = Select

const Publish = () => {
  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb
            items={[
              {title: <Link to={'/'}>首頁</Link>},
              {title: "發布文章"}
            ]}
          />
        }
      >
        <Form
          labelCol={{span:4}}
          wrapperCol={{span:16}}
          initialValues={{type:1}}
        >
          <Form.Item 
            label={"標題"} 
            name="title"
            rules={[{required:true,message:"請輸入文章標題"}]}
          >
            <Input placeholder={"請輸入文章標題"} style={{width:'400px'}}/>
          </Form.Item>
          
          <Form.Item
            label={"頻道"}
            name="channel_id"
            rules={[{required:true,message:"請輸入文章頻道"}]}
          >
            <Select placeholder={"請選擇文章頻道"} style={{width:'400px'}}>
              <Option value={0}>推薦</Option>
            </Select>
          </Form.Item>
          
          <Form.Item
            label={"內容"}
            name="content"
            rules={[{required:true,message:"請輸入文章內容"}]}
          ></Form.Item>
          
          <Form.Item wrapperCol={{offset:4}}>
            <Space>
              <Button size={"large"} type={"primary"} htmlType={"submit"}>
                發布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
export default Publish