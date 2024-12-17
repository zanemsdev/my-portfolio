function CVDownloader() {
    return (
    <div className="text-center mt-20">
        <h2 className="x font-extrabold text-gray-900 sm:text-5xl">Téléchargez mon CV</h2>

        <p className="mx-auto mt-4 max-w-sm text-gray-500">Vous pouvez télécharger mon CV en cliquant sur le bouton ci-dessous.</p>

        <a href="/CV.pdf" target="_blank" className="mt-8 inline-block rounded-full border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">
            Mon CV Numérique
        </a>
    </div>
    )
  }
  
  export default CVDownloader