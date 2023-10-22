import React from 'react';
import { useContactStyles } from './contact.style';
import TitleComponent from 'core/shared/title/title.component';
import CardsComponent from 'core/shared/card/card.component';
import { FiPhone } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { Button, Form, Input } from 'antd';
import { useState } from 'react';


const ContactComponent = () => {
  const style = useContactStyles();
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    message:'',
  });

  const [form] = Form.useForm();

  const HandleChange = (e:any) => {
    const { name, value} = e.target;
    setFormData({ 
      ...formData, [name]: value 
    });
  };
 
const { name, email, message } = formData;

  const handleSubmit = () => {
    // console.log('Name:', name);
    // console.log('Email:', email);
    // console.log('Message:', message);

    // setName('');
    // setEmail('');
    // setMessage('');
    form.setFieldsValue({  
      name:'',
      email: '',
      message: '',
    });

  };

  const contactMenu = [
    {
      id: 1,
      icon: <FiPhone />,
      title: 'Phone :',
      subTitle: '(+994)554685562',
      color: '#FCF4FF'

    },
    {
      id: 2,
      icon: <AiOutlineMail />,
      title: 'Email :',
      subTitle: 'madinaavaliyeva@gmail.com',
      color: '#EEFBFF'

    },
  ];

  return (
    <div className={style.contact}>
      <div>
        <TitleComponent
          title='Contact'
        />
      </div>
      <CardsComponent
        data={contactMenu}
      />
      <div className={style.formWrapper}>
        <div className='col-lg-12'>
          <div className={style.title} >
            <span >I'm always open to discussing product</span>
            <p> design work or partnerships. </p>
          </div>
          <Form onFinish={handleSubmit} form={form}>
            <div className={style.inputContainer}>
              <label htmlFor='name'>Name:</label>
              <Form.Item  name='name'>
              <Input
              id='name'
              name='name'
              type='text'
              value={name}
              onChange={(e) => HandleChange(e)}
            />
              </Form.Item>
           
            </div>

            <div className={style.inputContainer}>
              <label htmlFor='email'>Email:</label>
              <Form.Item name='email'>
              <Input
                id='email'
                name='email'
                type='email'
                value={email}
                onChange={(e) => HandleChange(e)}
              />
              </Form.Item>
             
            </div>

            <div className={style.inputContainer}>
              <label htmlFor='message'>Message:</label>
             <Form.Item name='message' >
             <Input.TextArea
                id='message'
                name='message'
                value={message}
                onChange={(e) => HandleChange(e)}
              />
             </Form.Item>
            </div>

            <div className={style.inputContainer}>
              <Button type='primary' htmlType='submit' className='btn'>
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>

    </div>
  );
};

export default ContactComponent;