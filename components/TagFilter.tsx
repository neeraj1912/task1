export default function TagFilter({
    selectedJobTags,
    setSelectedJobTags,
  }: {
    selectedJobTags: string[];
    setSelectedJobTags: React.Dispatch<React.SetStateAction<string[]>>;
  }) {
    const handleDeleteButtonClick = (currentTag: string) => {
      setSelectedJobTags([
        ...selectedJobTags.filter((selectedTag) => selectedTag !== currentTag),
      ]);
    };
  
    const handleClearButtonClick = () => setSelectedJobTags([]);
  
    return (
      <div className="bg-white rounded-md p-4 lg:px-10 lg:py-6 mb-16 lg:mb-10 shadow-lg flex justify-between -mt-24">
        <div id="filter">
          {selectedJobTags.map((tag) => (
            <div
              key={tag}
              className="mr-4 my-2 inline-flex bg-cyan-light rounded-sm overflow-hidden"
            >
              <span className="p-2 text-cyan text-sm font-semibold">{tag}</span>
              <button
                onClick={() => handleDeleteButtonClick(tag)}
                className="bg-cyan px-3 hover:bg-cyan-darkest"
              >
                <img src="/images/icon-remove.svg" alt="" />
              </button>
            </div>
          ))}
        </div>
  
        <button
          onClick={handleClearButtonClick}
          className="text-sm text-cyan font-bold hover:underline"
        >
          Clear
        </button>
      </div>
    );
  }
  