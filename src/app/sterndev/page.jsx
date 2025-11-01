export default function Home() {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4 dark:text-gray-200">SterNdev</h1>
            <p className="text-lg mb-4">
            Bienvenue sur SterNdev, une plateforme dédiée au domaine de l'informatique, du développement et du design. Visitez notre site  <a href="https://sterndev.fr" className="text-indigo-700 underline">sterndev.fr</a> pour plus d'informations.
            </p>
            <p className="text-lg">
                Pour information : Ce projet est en cours de développement et de refonte total. Cela signifie que certaines fonctionnalités peuvent ne pas être disponibles ou ne pas fonctionner correctement.
                Si vous rencontrez un problème, n'hésitez pas à me contacter à l'adresse suivante : <a href="mailto:support@sterndev.fr" className="text-indigo-700 underline">support@sterndev.fr</a>.
                Merci de votre compréhension.
            </p>
        </div>
    )
}