import Form from "./Form.jsx";
import Display from "./Display.jsx";
import { useState } from "react";

export default function Global() {
  const initialFieldsValue = {
    general: {
      id: crypto.randomUUID(),
      heading: "General Information",
      fields: {
        name: [crypto.randomUUID(), "Full Name", ""],
        email: [crypto.randomUUID(), "Email", ""],
        phoneNumber: [crypto.randomUUID(), "Phone Number", ""],
      },
    },
    education: {
      id: crypto.randomUUID(),
      heading: "Education",
      fields: {
        schoolName: [crypto.randomUUID(), "School Name", ""],
        title: [crypto.randomUUID(), "Title of Study", ""],
        startDateSchool: [crypto.randomUUID(), "Start Date", ""],
        endDate: [crypto.randomUUID(), "End Date", ""],
      },
    },
    experience: {
      id: crypto.randomUUID(),
      heading: "Work Experience",
      fields: {
        companyName: [crypto.randomUUID(), "Company Name", ""],
        position: [crypto.randomUUID(), "Position", ""],
        responsibility: [crypto.randomUUID(), "Responsibility", ""],
        startDate: [crypto.randomUUID(), "Start Date", ""],
        endDate: [crypto.randomUUID(), "End Date", ""],
      },
    },
  };
  const [fieldsValue, setFieldsValue] = useState(initialFieldsValue);
  return (
    <>
      <Form fieldsValue={fieldsValue} onSubmit={setFieldsValue}></Form>
      <Display fieldsValue={fieldsValue}></Display>
    </>
  );
}
