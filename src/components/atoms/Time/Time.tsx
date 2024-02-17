const Time = ({ date, title, noYear }) => {
  const dateTimeString = date.toISOString();
  const dateString = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <p className="text-sm text-gray-600 dark:text-gray-400">
      <time title={title} dateTime={dateTimeString}>
        {noYear ? dateString.slice(0, -5) : dateString}
      </time>
    </p>
  );
};

export default Time;
