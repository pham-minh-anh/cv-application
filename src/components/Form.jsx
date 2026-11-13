export default function Form({ fieldsValue, onSubmit }) {
  function handleSubmit() {}
  function handleEdit() {}
  return (
    <form>
      <h1>Form</h1>
      <General />
      <Education />
      <Experience />
      <button type="submit">Submit</button>
      <button>Edit</button>
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
