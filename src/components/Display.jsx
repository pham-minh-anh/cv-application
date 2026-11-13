export default function Display({ fieldsValue }) {
  return (
    <>
      <h1> Your CV </h1>
      {Object.values(fieldsValue).map((section) => {
        return (
          <DisplaySection
            key={section.id}
            heading={section.heading}
            fields={section.fields}
          />
        );
      })}
    </>
  );
}

function DisplaySection({ heading, fields }) {
  return (
    <>
      <h2>{heading}</h2>
      {Object.values(fields).map((field) => {
        return (
          <DisplayField key={field[0]} title={field[1]} content={field[2]} />
        );
      })}
    </>
  );
}

function DisplayField({ title, content }) {
  return (
    <>
      <h3>{title}</h3>
      <p>{content}</p>
    </>
  );
}
