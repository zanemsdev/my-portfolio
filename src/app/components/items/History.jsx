import { historyData } from '../../data/history';

function History() {
  return (
    <div className="w-full py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Mon Histoire
        </h2>
        
        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-indigo-500 to-indigo-700"></div>
          
          <div className="space-y-3">
            {historyData.map((item, index) => (
              <div 
                key={item.id} 
                className="flex items-center gap-4"
              >
                {/* Contenu gauche */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-4' : 'invisible'}`}>
                  {index % 2 === 0 && (
                    <div className="bg-white dark:bg-gray-800 p-2.5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <span className="text-base font-bold text-indigo-700 dark:text-indigo-400">
                        {item.year}
                      </span>
                      <h3 className="text-sm font-semibold mt-0.5 mb-0.5 text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Point sur la timeline */}
                <div className="w-3 h-3 bg-indigo-700 dark:bg-indigo-400 rounded-full border-2 border-white dark:border-gray-900 shadow-md z-10 flex-shrink-0"></div>
                
                {/* Contenu droite */}
                <div className={`w-1/2 ${index % 2 === 1 ? 'text-left pl-4' : 'invisible'}`}>
                  {index % 2 === 1 && (
                    <div className="bg-white dark:bg-gray-800 p-2.5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <span className="text-base font-bold text-indigo-700 dark:text-indigo-400">
                        {item.year}
                      </span>
                      <h3 className="text-sm font-semibold mt-0.5 mb-0.5 text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;