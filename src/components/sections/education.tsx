interface IBlogData {
  Degree: string;
  Duration: string;
  Score: string;
  College: string;
}

export function Education({ data }: { data: Record<string, IBlogData> }) {
  return (
    <div id="education" className="py-10">
      <h2 className="text-base font-medium text-primary/90">education.</h2>

      <ul className="mt-4 flex flex-col gap-12 text-base font-normal text-primary/90">
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>
            <div className="size-full border-l border-muted-foreground pl-4 transition-all duration-300 hover:border-primary">
              <p className="text-lg text-primary/90">
                {value.Degree}{" "}
                <span className="rounded px-2 py-1 text-s inline-block max-sm:mb-2">
                  {"("}
                  {key}
                  {")"}
                </span>
              </p>

              {/* <p className="line-clamp-3 text-sm text-muted-foreground text-justify">
                {value.College}
              </p> */}
              <p className="flex items-center gap-1 text-sm ">
                <span className="text-muted-foreground">{value.College}</span>

                <span className="rounded bg-secondary px-2 py-1 text-xs inline-block max-sm:mb-2">
                  {value.Score}
                </span>
              </p>
              <p className="flex items-center gap-1 text-sm text-muted-foreground">
                <span className=" py-px text-xs mt-1">{value.Duration}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
