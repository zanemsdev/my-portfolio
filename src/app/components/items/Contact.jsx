export default function Page() {
  async function onSubmit(event) {
    event.preventDefault()
 
    const formData = new FormData(event.target)
    const response = await fetch('/api/emails/send-email', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    // ...
  }
  return (
    <main className="flex overflow-hidden">
      <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
        <div className="max-w-full flex-1 mx-auto px-4 text-gray-600 dark:text-gray-300">
          <div>
            <h3 className="text-gray-800 dark:text-gray-100 text-3xl font-semibold sm:text-4xl">
              Contact us
            </h3>
            <p className="mt-3">
              Vous avez une question ? N'hésitez pas à me contacter.
            </p>
          </div>
          <form onSubmit={onSubmit} className="space-y-5 mt-12 lg:pb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="font-medium">Nom et Prénom</label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 dark:text-gray-300 bg-transparent outline-none border dark:border-gray-700 focus:border-indigo-700 dark:focus:border-indigo-500 shadow-sm rounded-lg hover:border-indigo-700 dark:hover:border-indigo-500"
                  name="nameFrom"
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 dark:text-gray-300 bg-transparent outline-none border dark:border-gray-700 focus:border-indigo-700 dark:focus:border-indigo-500 shadow-sm rounded-lg hover:border-indigo-700 dark:hover:border-indigo-500"
                  name="from"
                />
              </div>
              <div>
                <label className="font-medium">Numéro de téléphone</label>
                <div className="relative mt-2">
                  <input
                    type="tel"
                    placeholder="+33 0 00 00 00 00"
                    required
                    className="w-full px-3 py-2 text-gray-500 dark:text-gray-300 bg-transparent outline-none border dark:border-gray-700 focus:border-indigo-700 dark:focus:border-indigo-500 shadow-sm rounded-lg hover:border-indigo-700 dark:hover:border-indigo-500"
                    name="phone"
                  />
                </div>
              </div>
              <div>
                <label className="font-medium">Objet</label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 dark:text-gray-300 bg-transparent outline-none border dark:border-gray-700 focus:border-indigo-700 dark:focus:border-indigo-500 shadow-sm rounded-lg hover:border-indigo-700 dark:hover:border-indigo-500"
                  name="subject"
                />
              </div>
            </div>
            <div>
              <label className="font-medium">Message</label>
              <textarea
                required
                className="resize-none w-full mt-2 h-36 px-3 py-2 text-gray-500 dark:text-gray-300 bg-transparent outline-none border dark:border-gray-700 focus:border-indigo-700 dark:focus:border-indigo-500 shadow-sm rounded-lg hover:border-indigo-700 dark:hover:border-indigo-500"
                name="message"
              ></textarea>
            </div>
            <button type="submit" className="w-full px-4 py-2 text-white font-medium bg-indigo-700 dark:bg-indigo-500 hover:bg-indigo-800 dark:hover:bg-indigo-600 active:bg-indigo-800 dark:active:bg-indigo-600 rounded-lg duration-150">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
