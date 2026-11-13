import { useState } from "react";

export default function Form({ fieldsValue, onSubmit }) {
  const [editing, setEditing] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const form = document.querySelector("form");
    const newFieldsValue = structuredClone(fieldsValue);
    newFieldsValue.general.fields.name[2] = form.elements.name.value;
    newFieldsValue.general.fields.email[2] = form.elements.email.value;
    newFieldsValue.general.fields.phoneNumber[2] =
      form.elements.phoneNumber.value;

    newFieldsValue.education.fields.schoolName[2] =
      form.elements.schoolName.value;
    newFieldsValue.education.fields.title[2] = form.elements.title.value;
    newFieldsValue.education.fields.startDateSchool[2] =
      form.elements.startDateSchool.value;
    newFieldsValue.education.fields.endDateSchool[2] =
      form.elements.endDateSchool.value;

    newFieldsValue.experience.fields.companyName[2] =
      form.elements.companyName.value;
    newFieldsValue.experience.fields.position[2] = form.elements.position.value;
    newFieldsValue.experience.fields.responsibility[2] =
      form.elements.responsibility.value;
    newFieldsValue.experience.fields.startDate[2] =
      form.elements.startDate.value;
    newFieldsValue.experience.fields.endDate[2] = form.elements.endDate.value;

    form.reset();
    setEditing(false);
    onSubmit(newFieldsValue);
  }
  function handleEdit(e) {
    e.preventDefault();
    const form = document.querySelector("form");
    form.elements.name.value = fieldsValue.general.fields.name[2];
    form.elements.email.value = fieldsValue.general.fields.email[2];
    form.elements.phoneNumber.value = fieldsValue.general.fields.phoneNumber[2];

    form.elements.schoolName.value = fieldsValue.education.fields.schoolName[2];
    form.elements.title.value = fieldsValue.education.fields.title[2];
    form.elements.startDateSchool.value =
      fieldsValue.education.fields.startDateSchool[2];
    form.elements.endDateSchool.value =
      fieldsValue.education.fields.endDateSchool[2];

    form.elements.companyName.value =
      fieldsValue.experience.fields.companyName[2];
    form.elements.position.value = fieldsValue.experience.fields.position[2];
    form.elements.responsibility.value =
      fieldsValue.experience.fields.responsibility[2];
    form.elements.startDate.value = fieldsValue.experience.fields.startDate[2];
    form.elements.endDate.value = fieldsValue.experience.fields.endDate[2];
    setEditing(true);
  }
  return (
    <form>
      <h1>Form</h1>
      <General />
      <Education />
      <Experience />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <button onClick={handleEdit}>Edit</button>
    </form>
  );
}

function General() {
  return (
    <section>
      <h2>General Information</h2>

      <label htmlFor="name">Full Name (required)</label>
      <input id="name" name="name" type="text" required />

      <label htmlFor="email">Email (required)</label>
      <input id="email" name="email" type="email" required />

      <label htmlFor="phoneNumber">Phone Number (required)</label>
      <input id="phoneNumber" name="phoneNumber" type="tel" required />
    </section>
  );
}

function Education() {
  return (
    <section>
      <h2>Education</h2>

      <label htmlFor="schoolName">School Name (required)</label>
      <input id="schoolName" name="schoolName" type="text" required />

      <label htmlFor="title">Title of Study (required)</label>
      <input id="title" name="title" type="text" required />

      <label htmlFor="startDateSchool">Start Date (required)</label>
      <input id="startDateSchool" name="startDateSchool" type="date" required />

      <label htmlFor="endDateSchool">End Date (required)</label>
      <input id="endDateSchool" name="endDateSchool" type="date" required />
    </section>
  );
}

function Experience() {
  return (
    <section>
      <h2>Experience</h2>

      <label htmlFor="companyName">Company Name</label>
      <input id="companyName" name="companyName" type="text" />

      <label htmlFor="position">Position Title</label>
      <input id="position" name="position" type="text" />

      <label htmlFor="responsibility">Responsibilities</label>
      <input id="responsibility" name="responsibility" type="text" />

      <label htmlFor="startDate">Start Date</label>
      <input id="startDate" name="startDate" type="date" />

      <label htmlFor="endDate">End Date</label>
      <input id="endDate" name="endDate" type="date" />
    </section>
  );
}
