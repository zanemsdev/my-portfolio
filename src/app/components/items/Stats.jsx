function Stats({ title, description, stats = [] }) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 p-6 shadow-sm"
            >
              <dt className="text-sm font-medium text-gray-600 dark:text-gray-400 text-center">
                {stat.name}
              </dt>
              <dd className="mt-2 text-4xl font-extrabold text-indigo-700 dark:text-indigo-400">
                {stat.value}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
