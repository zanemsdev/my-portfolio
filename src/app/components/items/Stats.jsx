export default function Stats(title, description, name1, value1, name2, value2, name3, value3, name4, value4) {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          {title}
        </h2>

        <p className="mt-4 text-gray-500 sm:text-xl">
          {description}
        </p>
      </div>

      <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            {name1}
          </dt>

          <dd className="text-4xl font-extrabold text-indigo-700 md:text-5xl">
            {value1}
          </dd>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            {name2}
          </dt>

          <dd className="text-4xl font-extrabold text-indigo-700 md:text-5xl">
            {value2}
          </dd>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            {name3}
          </dt>

          <dd className="text-4xl font-extrabold text-indigo-700 md:text-5xl">
            {value3}
          </dd>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            {name4}
          </dt>

          <dd className="text-4xl font-extrabold text-indigo-700 md:text-5xl">
            {value4}
          </dd>
        </div>
      </dl>
    </div>
  );
}
