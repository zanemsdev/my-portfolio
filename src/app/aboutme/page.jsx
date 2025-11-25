import History from "../components/items/History";
import Stats from "../components/items/Stats";
import { Divider } from "@nextui-org/divider";
import { projects } from "../data/projects";
import { information } from "../data/config";
import { metaData } from "../data/config";

export const metadata = {
  title: metaData.titleAbout,
  description: metaData.description,
  keywords: metaData.keywords,
  robots: metaData.robots,
} 

export default function Home() {
    return (
        <>
            <div className="flex-1 space-y-6">
            <h1 className="m-5 mb-8 x font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl tracking-tight">⭐ À propos de moi </h1>
            <p className="m-5">Je m'appelle <span className="font-bold text-indigo-700 dark:text-indigo-400">{information.name}</span>, j'ai {information.age} ans et je suis passionné par le numérique. Curieux et motivé, j'explore les technologies modernes pour créer des projets qui allient innovation, efficacité et expériences utilisateur soignées.</p>
            <p className="m-5">J’aime comprendre comment les systèmes fonctionnent, expérimenter de nouvelles idées et transformer des concepts en solutions concrètes. Que ce soit en apprenant de nouvelles compétences, en travaillant sur des projets personnels ou en collaborant avec d’autres, je cherche constamment à me dépasser et à élargir mes connaissances dans un domaine en pleine évolution.</p>
            <p className="m-5">Je suis actuellement dans une phase où je trouve autant de plaisir à <span className="font-bold text-indigo-700 dark:text-indigo-400">développer</span> qu’à <span className="font-bold text-indigo-700 dark:text-indigo-400">concevoir</span> des interfaces. Je me construis donc entre deux univers qui se complètent : la logique et la structure du code d’un côté, la créativité et l’esthétique du design de l’autre. Je n’ai pas encore choisi lequel des deux me définit le plus, et c’est précisément ce qui rend mon parcours riche et stimulant.</p>
            <p className="m-5">Je travaille avec <span className="font-bold text-indigo-700 dark:text-indigo-400">rigueur</span>, <span className="font-bold text-indigo-700 dark:text-indigo-400">logique</span> et un vrai goût pour la <span className="font-bold text-indigo-700 dark:text-indigo-400">créativité</span>. J’aime aller au bout des choses, comprendre ce que je fais et chercher les solutions les plus propres et efficaces.</p>
            <p className="m-5">J'apprends principalement <span className="font-bold text-indigo-700 dark:text-indigo-400">par la pratique</span> : en construisant des projets, en testant, en itérant et en me formant de manière autodidacte. Cette approche me permet d’être autonome tout en restant ouvert aux conseils et aux retours qui me font progresser.</p>
            <p className="m-5">En équipe, j’apporte une énergie positive, de l’écoute et un véritable esprit de collaboration. J’aime échanger des idées, partager ce que j’apprends et contribuer à créer une dynamique où chacun peut s’exprimer et avancer.</p>
            </div>
            <Divider className="my-10" />
            <History />
        </>
    )
}