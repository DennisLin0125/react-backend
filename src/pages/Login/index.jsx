import { Card, message } from 'antd'
import logo from '@/asset/logo.png'
import './index.scss'
import { Form, Input, Button } from 'antd'
// import { fetchLogin } from '@/store/modules/user'
// import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

const Login = () => {
  // const dispatch = useDispatch()
  // const navigate = useNavigate()
  const onFinish = async formValue => {
    // await dispatch(fetchLogin(formValue))
    // navigate('/')
    // message.success('登入成功')
  }
  
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登入表單 */}
        <Form validateTrigger={['onBlur', 'onChange']} onFinish={onFinish} initialValues={{
          mobile: '13800000002',
          code: '246810',
        }}>
          <Form.Item
            name="mobile"
            rules={[
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '手機號碼格式不對',
                validateTrigger: 'onBlur'
              },
              { required: true, message: '請輸入手機號碼' }
            ]}>
            <Input size="large" placeholder="請輸入手機號碼" />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[
              { required: true, message: '請輸入驗證碼' },
              { len: 6, message: '驗證碼6個字元', validateTrigger: 'onBlur' }
            ]}
          >
            <Input size="large" placeholder="請輸入驗證碼" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登入
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div >
  )
}

export default Login