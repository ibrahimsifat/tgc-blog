import Image from "next/image";

const AuthorProfile = ({ user }) => {
  return (
    <address class="flex items-center mb-6 not-italic">
      <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
        <Image
          alt={user?.name}
          class="mr-4 w-16 h-16 rounded-full"
          src={user?.image}
          width={56}
          height={56}
        />
        <div>
          <a
            href="#"
            rel="author"
            class="text-xl font-bold text-gray-900 dark:text-white"
          >
            {user?.name}
          </a>
          <p class="text-base text-gray-500 dark:text-gray-400">
            Developer, educator & CEO Kollsh
          </p>
          <p class="text-base text-gray-500 dark:text-gray-400">
            <time pubdate datetime="2022-02-08" title="February 8th, 2022">
              Feb.18, 2024
            </time>
          </p>
        </div>
      </div>
    </address>
  );
};

export default AuthorProfile;
