import RightMenu from '@/components/rightMenu/RightMenu';
import Stories from '@/components/Stories';
import AddPost from '@/components/AddPost';
import LeftMenu from '@/components/leftMenu/LeftMenu';
import Feed from '@/components/feed/Feed';
import "../styles/globals.css";

const Homepage = () => {
  return (
    <div className="flex relative overflow-y-auto scrollbar-hidden">
      <aside className=" hidden xl:block absolute left-0 top-0 h-full w-[23%] overflow-y-auto scrollbar-hidden ">
        <LeftMenu type="home" />
      </aside>
      <main className="w-full lg:w-[70%] xl:w-[50%] ml-[25%] mr-[20%] overflow-y-auto h-full scrollbar-hidden">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </main>
      <aside className="  hidden lg:block absolute right-0 top-0 h-full w-[23%] overflow-y-auto scrollbar-hidden">
        <RightMenu />
      </aside>
    </div>
  );
};

export default Homepage;