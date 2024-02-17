export default function ProfileAvatar() {
  return (
    <div class="flex items-center">
      <p class="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
        <img
          class="mr-2 w-6 h-6 rounded-full"
          src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
          alt="Michael Gough"
        />
        Michael Gough
      </p>
      <div class="text-sm text-gray-600 dark:text-gray-400">
        <time pubdate datetime="2022-02-08" title="February 8th, 2022">
          Feb. 8, 2022
        </time>
      </div>
    </div>
  );
}