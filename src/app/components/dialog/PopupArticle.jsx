import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function PopupArticle({
  title = "Titre du projet",
  description = "",
  text = "",
  img = "",
  url = "#",
  year = "",
  tags = [],
  images = [],
  extraTexts = [],
  children,
}) {
  const tagsList = Array.isArray(tags) ? tags : tags ? [tags] : [];

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          {children ? children : <Button variant="outline">Open Dialog</Button>}
        </DialogTrigger>

        <DialogContent
          className="sm:max-w-[900px] bg-white dark:bg-gray-800 overflow-y-auto max-h-[80vh] rounded-lg border border-gray-100 dark:border-gray-800 shadow-2xl"
        >
          <DialogHeader className="text-left">
            <DialogTitle className="text-gray-900 dark:text-gray-100">{title}</DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-400">
              {year ? `Année : ${year}` : null}
            </DialogDescription>

            {tagsList.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {tagsList.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-full text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-4 h-1 w-12 rounded bg-indigo-600 dark:bg-indigo-500" />
          </DialogHeader>

          <div className="grid gap-4">
            {/* Bannière principale retirée */}

            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{description}</p>
              {text ? (
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{text}</p>
              ) : null}

              {/* Textes additionnels */}
              {extraTexts && extraTexts.length > 0 && (
                <div className="space-y-3">
                  {extraTexts.map((et, idx) => (
                    <p key={idx} className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{et}</p>
                  ))}
                </div>
              )}

              {/* Images additionnelles */}
              {images && images.length > 0 && (
                <div className="my-4 flex flex-wrap justify-center items-center gap-4">
                  {images.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`Image additionnelle ${idx + 1}`}
                      className="mx-auto object-cover rounded-md w-full max-w-sm h-auto"
                    />
                  ))}
                </div>
              )}

              {/* Tags déplacés dans le header, bloc supprimé ici */}
            </div>
          </div>

          <DialogFooter className="mt-4 border-t border-gray-100 dark:border-gray-700 pt-4">
            <DialogClose asChild>
              <Button variant="outline">Fermer</Button>
            </DialogClose>
            {url && url.length > 0 && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button type="button" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  Voir le projet
                </Button>
              </a>
            )}
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
export default PopupArticle
