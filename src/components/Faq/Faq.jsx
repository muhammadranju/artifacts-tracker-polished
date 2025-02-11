export const Faq = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div></div>
          <h2 className=" mb-6 font-sans text-2xl font-bold leading-none tracking-tight dark:text-slate-100 text-gray-900 sm:text-4xl md:mx-auto">
            Frequently Asked Questions About Artifacts
          </h2>
          <p className="text-base text-gray-700 dark:text-slate-300 md:text-lg">
            Artifacts are valuable historical objects that provide insights into
            past civilizations. Below are some common questions and answers
            related to artifacts, their preservation, and significance.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium dark:text-slate-100">
                What is an artifact?
              </p>
              <p className="text-gray-700 dark:text-slate-300">
                An artifact is any object made or used by humans in the past
                that provides insights into history, culture, or daily life.
                These can include tools, pottery, coins, manuscripts,
                sculptures, and more.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium dark:text-slate-100">
                How are artifacts preserved?
              </p>
              <p className="text-gray-700 dark:text-slate-300">
                Artifacts are preserved through careful conservation techniques,
                including climate control, protective casings, and restoration
                processes. Museums and archaeologists take special precautions
                to prevent decay and damage.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium dark:text-slate-100">
                Where do artifacts come from?
              </p>
              <p className="text-gray-700 dark:text-slate-300">
                Artifacts are typically discovered through archaeological
                excavations, historical sites, ancient ruins, and sometimes even
                by accident. They can also be found in private collections and
                museum archives.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium dark:text-slate-100">
                Why are artifacts important?
              </p>
              <p className="text-gray-700 dark:text-slate-300">
                Artifacts help historians and researchers understand ancient
                civilizations, their traditions, technology, and daily lives.
                They provide valuable evidence about how societies evolved over
                time.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium dark:text-slate-100">
                Can I donate an artifact to a museum?
              </p>
              <p className="text-gray-700 dark:text-slate-300">
                Yes, many museums accept artifact donations, but they typically
                require proper documentation regarding the artifact’s origin,
                authenticity, and ownership history to ensure ethical
                acquisition and preservation.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium dark:text-slate-100">
                How can I tell if an artifact is authentic?
              </p>
              <p className="text-gray-700 dark:text-slate-300">
                Authenticity is determined through expert analysis, including
                material testing, carbon dating, stylistic comparisons, and
                historical records. Museums and professional archaeologists use
                these methods to verify the age and origin of artifacts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
