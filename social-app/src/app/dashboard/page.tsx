import RightMenu from '@/components/rightMenu/RightMenu';
import Stories from '@/components/Stories';
import AddPost from '@/components/AddPost';
import LeftMenu from '@/components/leftMenu/LeftMenu';
import Feed from '@/components/feed/Feed';
import "../styles/globals.css";

const Homepage = () => {
  return (
    <div className="flex relative">
      <aside className=" ml-24 hidden xl:block fixed left-0 top-0 h-full mt-28 w-[20%] overflow-y-auto scrollbar-hidden">
        <LeftMenu type="home" />
      </aside>
      <main className="w-full lg:w-[70%] xl:w-[50%] mt-28 ml-[25%] mr-[20%] overflow-y-auto h-full scrollbar-hidden">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </main>
      <aside className=" mr-24 hidden lg:block fixed right-0 top-0 h-full mt-28 w-[20%] overflow-y-auto scrollbar-hidden">
        <RightMenu />
      </aside>
    </div>
  );
};

export default Homepage;