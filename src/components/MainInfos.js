import { useAppContext } from '../context/context';
import { motion } from 'framer-motion';

function MainInfos() {
  const { githubUser, isDarkMode } = useAppContext();
  const { public_repos, followers, following, public_gists } = githubUser;
  const items = [
    {
      id: 1,
      name: public_repos > 1 ? 'repos' : 'repo',
      value: public_repos,
    },
    {
      id: 2,
      name: followers > 1 ? 'followers' : 'follower',
      value: followers,
    },
    {
      id: 3,
      name: 'following',
      value: following,
    },
    {
      id: 4,
      name: public_gists > 1 ? 'gists' : 'gist',
      value: public_gists,
    },
  ];
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const circleItem = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={`${
        isDarkMode && 'dark'
      } grid grid-cols-2 sm:grid-cols-4 place-items-center mt-10 gap-y-5 max-w-screen-xl mx-16 sm:mx-auto`}
    >
      {items.map((item) => {
        return (
          <motion.div
            variants={circleItem}
            key={item.id}
            className="w-24 h-24 md:w-32 md:h-32 bg-white dark:bg-black rounded-full flex flex-col items-center justify-center font-roboto border-2 
      dark:border-gray-500 dark:hover:border-gray-700 border-blue-500 hover:border-4
      hover:border-blue-700
      hover:transition-all"
          >
            <div
              className={`
               ${
                 item.value.toString().length > 3 ? 'text-2xl' : 'text-4xl'
               } font-bold 
               text-black dark:text-gray-300`}
            >
              {item.value}
            </div>
            <div className="text-sm md:text-base font-light text-gray-500 dark:text-gray-400">
              {item.name}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default MainInfos;
