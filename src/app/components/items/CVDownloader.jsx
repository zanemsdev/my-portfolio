function CVDownloader() {
    return (
    <div className="text-center mt-20">
        <h2 className="x font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl">Téléchargez mon CV</h2>

        <p className="mx-auto mt-4 max-w-sm text-gray-500">Vous pouvez télécharger mon CV en cliquant sur le bouton ci-dessous.</p>

        <a href="/CV.pdf" target="_blank" className="mt-8 inline-block rounded-full border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 dark:border-indigo-400 dark:text-indigo-400 dark:hover:text-white dark:hover:bg-indigo-400 hover:shadow-indigo-700 dark:hover:shadow-indigo-500 shadow-2xl">
            Mon CV Numérique
        </a>
    </div>
    )
  }
  
  export default CVDownloader