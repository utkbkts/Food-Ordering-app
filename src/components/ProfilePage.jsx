import React, { useRef } from "react";
import { Button, Form, Input, Space } from "antd";

import "../Sass/profile.scss";
import useEditUsers from "../hook/useEditUsers";
import usePreviewImage from "../hook/usePreviewImage";
import useAuthStore from "../store/store";
const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        }
      );
  }, [values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Edit
    </Button>
  );
};
const ProfilePage = () => {
  const [form] = Form.useForm();
  const fileRef = useRef(null);
  const authUser = useAuthStore((state) => state.user);
  const { EditUser } = useEditUsers();
  const { selectedFile, handleImageChange, setSelectedFile } =
    usePreviewImage();
  // initialValues objesi ile formdaki varsayılan değerleri belirleme
  const initialValues = {
    email: authUser.email,
    name: authUser.Name, // Varsayılan olarak name alanı da doldurulacak
    phone: authUser.phone, // Varsayılan olarak phone alanı da doldurulacak
    streetadress: authUser.streetadress, // Varsayılan olarak streetadress alanı da doldurulacak
    postalcode: authUser.postalcode, // Varsayılan olarak postalcode alanı da doldurulacak
    city: authUser.city, // Varsayılan olarak city alanı da doldurulacak
    country: authUser.country, // Varsayılan olarak country alanı da doldurulacak
  };

  const handleFormSubmit = () => {
    const formData = form.getFieldsValue();
    // formData içerisindeki input değerlerini kullanarak bir işlem yapabilirsiniz

    EditUser(formData, selectedFile);
  };
 
  return (
    <div className="profile-page">
      <div className="__a">
        <div className="image">
          <img src={selectedFile || authUser?.profilePicURL} alt="" />
          <label htmlFor="fileInput">
            <Button onClick={() => fileRef.current.click()}>Change Icon</Button>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              onChange={handleImageChange}
              ref={fileRef}
            />
          </label>
        </div>
        <div className="form-wrap">
          <Form
            form={form}
            name="validateOnly"
            layout="vertical"
            autoComplete="off"
            onFinish={handleFormSubmit}
            initialValues={initialValues}
          >
            <div className="input-display">
              <Form.Item name="name" label="Name">
                <Input />
              </Form.Item>
              <Form.Item name="email" label="Email">
                <Input disabled  />
              </Form.Item>
            </div>
            <Form.Item
              name="phone"
              label="Phone"
              rules={[
                {
                    type: "string",
                  message: "Please input a valid phone number!",
                  max: 11,
                },
              ]}
            >
              <Input maxLength={11} type="number" />
            </Form.Item>

            <Form.Item name="streetadress" label="Street Adress">
              <Input />
            </Form.Item>
            <div className="input-display">
              <Form.Item
                rules={[
                  {
                    type: "string",
                    message: "Please input a valid postal code!",
                    max: 6,
                  },
                ]}
                name="postalcode"
                label="Postal Code"
              >
                <Input maxLength={6}/>
              </Form.Item>
              <Form.Item name="city" label="City">
                <Input />
              </Form.Item>
            </div>
            <Form.Item name="country" label="Country">
              <Input />
            </Form.Item>
            <Form.Item>
              <Space>
                <SubmitButton form={form} />
                <Button htmlType="reset">Reset</Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
