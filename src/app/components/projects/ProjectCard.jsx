function ProjectCard({ title, description, img, url, year }) {
    return (
      <article className="overflow-hidden rounded-lg border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-800 shadow-sm m-5 hover:scale-110 transition-all duration-500 cursor-pointer  hover:shadow-indigo-700 dark:hover:shadow-indigo-500 shadow-3xl">
        <img
          alt=""
          src={img}
          className="h-56 w-full object-cover"
        />
      
        <div className="p-4 sm:p-6">
          <a href={url}>
            <h3 className="text-lg font-medium text-gray-900">
              {title}
            </h3>
          </a>

          <p className="mt-2 text-sm text-gray-800">
            {year}
          </p>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {description}
          </p>
      
          <a href={url} target="_blank" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-700 dark:text-indigo-400">
            En savoir plus
      
            <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
              &rarr;
            </span>
          </a>
        </div>
      </article>
    )
  }
  
  export default ProjectCard