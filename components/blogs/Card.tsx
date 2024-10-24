import moment from "moment";

export function BlogCard({
  id,
  category,
  title,
  excerpt,
  date,
  imageUrl,
}: any) {
  return (
    <a
      href={`/content/blogs/${id}`}
      className="relative flex flex-col gap-2 hover:cursor-pointer w-full"
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt="blog-card"
          className="h-[155px] w-full rounded-2xl object-cover object-center lg:h-[270px]"
        />
        <div className="absolute left-0 top-0 z-0 h-full w-full rounded-2xl bg-gradient-to-b from-black/0 to-black/80"></div>
        <div className="absolute left-4 top-4 rounded-full bg-primary px-4 text-sm text-white">
          {category}
        </div>
        <h3 className="font-sofiapro bottom-2 left-4 hidden text-lg text-white lg:absolute lg:block">
          {title}
        </h3>
      </div>
      <div className="z-10">
        <h3 className="text-lg font-bold lg:hidden">{title}</h3>
        <p className="text-sm">{excerpt}</p>
        <p className="mt-4 text-sm text-black/40">
          {moment(date).format("MMMM D, YYYY")}
        </p>
      </div>
    </a>
  );
}

export function LatestCard({ id, title, excerpt, date }: any) {
  return (
    <div>
      <div className="flex flex-col gap-4 rounded-2xl bg-gradient-to-r from-black/20 to-primary p-8">
        <h3 className="text-md font-bold text-white">{title}</h3>
        <p className="text-sm text-white">{excerpt}</p>
        <div className="flex flex-row justify-between">
          <p className="text-sm text-white/60">
            {moment(date).format("MMMM D, YYYY")}
          </p>
          <a
            href={`/content/blogs/${id}`}
            className="font-sofiapro w-28 self-end rounded-2xl bg-white px-4 py-1 text-sm text-black hover:cursor-pointer"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
