import Image from "next/image";

export default function PostAuthor({ authorAvatar, authorJob, authorName }) {
  return (
    <div className="flex items-center mt-6">
      {/* <div className="w-14 h-14 rounded-full relative object-cover mt-4"> */}
        <img 
          src={authorAvatar} 
          className="w-14 h-14 rounded-full relative object-cover mt-4"
          alt={authorName} 
        />
      {/* </div> */}
      <div className="ml-4">
        <h3>{authorName}</h3>
        <div className="text-white/60 text-sm mt-1">{authorJob}</div>
      </div>
    </div>
  );
}
