import Image from "next/image";

export default function ProfileAvatar({ user }) {
  return (
    <div class="flex items-center">
      <div class="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
        <Image
          width={40}
          height={40}
          class="mr-2 w-6 h-6 rounded-full"
          src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
          alt="Michael Gough"
        />
        {user.name}
      </div>
      <div class="text-sm text-gray-600 dark:text-gray-400">
        <time pubdate datetime="2022-02-08" title="February 8th, 2022">
          Feb. 8, 2022
        </time>
      </div>
    </div>
  );
}
