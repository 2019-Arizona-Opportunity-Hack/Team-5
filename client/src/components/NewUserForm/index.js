import React from "react";
import { FormattedMessage } from "react-intl";
import { Formik, Form } from "formik";

export default function NewUser() {
    return (
        <FormWrapper>
            <FormHeader>This is a New User Form</FormHeader>
            <Formik>
                initialValues={initialValues}
                validationSchema={}
                onSubmit={onSubmit}
                render=
                {props => (
                    <Form noValidate={true} className="new-use-form-container">
                        <FormSection>Name</FormSection>
                    </Form>
                )}
                ;
            </Formik>
        </FormWrapper>
    );
}
