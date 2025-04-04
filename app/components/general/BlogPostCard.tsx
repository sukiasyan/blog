import Link from "next/link";
import Image from "next/image";

interface IAppProps {
  data: {
    id: string,
    title: string,
    content: string,
    imageUrl: string,
    authorId: string,
    authorImage: string,
    authorName: string,
    createdAt: Date,
    updatedAt: Date
  }
}

export function BlogPostCard({data}: IAppProps) {
    return (
        <div className='group relative overflow-hidden rounded-lg border border-grey-200 bg-white  shadow-sm transition-all hover:shadow-lg'>
       <Link href={`/post/${data.id}`} className="block w-full h-full">
         <div className=" relative h-40 w-full overflow-hidden">
          <Image src={data.imageUrl} alt="image for blog" fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
         </div>
         <div className="p-4">
           <h3 className="mb-2 text-lg font-semibold text-grey-900">{data.title}</h3>
           <p className="mb-4 text-sm text-grey-600 line-clamp-2"> {data.content}</p>
           <div className="flex items-center justify-between">
             <div className="flex items-center space-x-2">
               <div className="relative size-8 overflow-hidden rounded-full">
                 <Image src={data.authorImage} alt={data.authorName} fill />
               </div>
               <p className="text-sm font-medium text-grey-700 ">{data.authorName}</p>
             </div>
             <time className="text-xs text-grey-600">{new Intl.DateTimeFormat("en-US",{
               year: "numeric",
                month: "short",
                day: "numeric",
             }).format(data.createdAt)}</time>
           </div>
         </div>
       </Link>
        </div>
    );
}