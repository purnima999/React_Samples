import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Label, Button } from 'reactstrap';
import Select from 'react-select';
import * as yup from 'yup';
import '../CSS/style.css';

const CreateQrCodeModel: React.FC = () => {


    const masterMockNumber: any = [
        { value: '78966002231', label: '78966002231' },
        { value: '98966002231', label: '98966002231' },
        { value: '68966002231', label: '68966002231' },
    ];

    const imageMockFormats: any = [
        { value: '.png', label: '.png' },
        { value: '.jpg', label: '.jpg' },
        { value: '.jpeg', label: '.jpeg' },
    ];


    const onChangeHandler = (e: any, keyName: any, setFieldValue: any) => {
        setFieldValue(keyName, e);
    }

    return (
        <>
            <div className="container-card">
                <div className="conatine-card-model-header">
                    <h5>Create QR Code Message</h5>
                    <hr style={{ color: "lightgray" }} />
                </div>
                <Formik
                    initialValues={{
                        qrCodeName: "",
                        masterNo: "",
                        message: "",
                        imageFormat: ""
                    }}
                    validationSchema={yup.object().shape({
                        qrCodeName: yup.string().required("This is a Required Field").max(100).min(0),
                        message: yup.string().required("This is a Required Field").max(140).min(0),
                        masterNo: yup.object().shape({
                            value: yup.string(),
                            label: yup.string(),
                        }).required('This field is required.'),
                        imageFormat: yup.object().shape({
                            value: yup.string(),
                            label: yup.string(),
                        }).required('This field is required.'),
                    })}
                    onSubmit={(values) => {
                        console.log("Submit=>", values)
                    }}
                >{({ values, setFieldValue, setFieldTouched }) => (
                    <>

                        <div className="model-container">
                            <Form>
                                <Label><span>*</span>QR Code Name</Label>
                                <Field className="input" name="qrCodeName" type="text" placeholder="Enter WhatsApp Message Template Name" />
                                <ErrorMessage className="errors" name="qrCodeName" /><br />
                                <Label><span>*</span>Master Phone Number</Label>
                                <Select
                                    className="input"
                                    name="masterNo"
                                    placeholder="Select"
                                    value={values?.masterNo || ""}
                                    onChange={(e) => onChangeHandler(e, 'masterNo', setFieldValue)}
                                    options={masterMockNumber || []}
                                    onBlur={() => setFieldTouched('masterNo', true)}
                                    isSearchable={masterMockNumber?.length > 5 ? true : false}
                                    closeMenuOnSelect={false}
                                    closeMenuOnScroll={false}
                                />
                                <ErrorMessage className="errors" name="masterNo" /><br />
                                <Label><span>*</span>Prefilled Message</Label>
                                <Field className="input" name="message" as="textarea" placeholder="Enter the Prefilled Message Text"/>
                                <ErrorMessage className="errors" name="message" /><br />
                                <Label>Image Format</Label>
                                <Select
                                    className="input"
                                    styles={{ backgroundcolor:"black", padding:"20px"} as any}
                                    name="imageFormat"
                                    placeholder="Select"
                                    value={values?.imageFormat || ""}
                                    onChange={(e) => onChangeHandler(e, 'imageFormat', setFieldValue)}
                                    options={imageMockFormats || []}
                                    onBlur={() => setFieldTouched('imageFormat', true)}
                                    isSearchable={masterMockNumber?.length > 5 ? true : false}
                                    closeMenuOnSelect={false}
                                    closeMenuOnScroll={false}
                                />
                                <ErrorMessage className="errors" name="imageFormat" /><br />

                                <Button type="submit" id='active'>Save</Button>
                                <Button type="reset">Cancel</Button>

                            </Form>
                        </div>
                    </>
                )}

                </Formik>
            </div>
        </>
    )
}
export default CreateQrCodeModel