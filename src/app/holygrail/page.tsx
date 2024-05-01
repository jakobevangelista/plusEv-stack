export default function Grail() {
  return (
    <>
      <div className="grid min-h-full grid-cols-[200px,1fr,150px] grid-rows-[4rem,1fr,5rem]">
        <div className="sticky top-0 col-span-3 border border-blue-500 bg-background">
          Header
        </div>
        <div className="sticky top-[4rem] self-start border border-red-500">
          left
        </div>
        <div className="border border-green-500">
          <div className="overflow-y-auto">
            <h2>Chicken Cacciatore</h2>
            <nav>
              <ol>
                <li>Introduction</li>
                <li>Prep</li>
                <li>Cooking</li>
                <li>Reviews</li>
                <li>Introduction</li>
                <li>Prep</li>
                <li>Cooking</li>
                <li>Reviews</li>
                <li>Introduction</li>
                <li>Prep</li>
                <li>Cooking</li>
                <li>Reviews</li>
                <li>Introduction</li>
                <li>Prep</li>
                <li>Cooking</li>
                <li>Reviews</li>
                <li>Introduction</li>
                <li>Prep</li>
                <li>Cooking</li>
                <li>Reviews</li>
                <li>Introduction</li>
                <li>Prep</li>
                <li>Cooking</li>
                <li>Reviews</li>
                <li>Introduction</li>
                <li>Prep</li>
                <li>Cooking</li>
                <li>Reviews</li>
                <li>Introduction</li>
                <li>Prep</li>
                <li>Cooking</li>
                <li>Reviews</li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="self-start border border-yellow-500">right</div>
        <div className="sticky bottom-0 col-span-3 border border-violet-500 bg-background">
          Footer
        </div>
      </div>
    </>
  );
}
