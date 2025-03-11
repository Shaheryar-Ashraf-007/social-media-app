import Feed from '@/components/Feed';
import LeftMenu from '@/components/LeftMenu';
import RightMenu from '@/components/RightMenu';
import Stories from '@/components/Stories';
import AddPost from '@/components/AddPost';
const Homepage = async () => {
  return (
    <div className="flex gap-6 pt-6">
      <aside className="hidden xl:block w-[20%]">
        <LeftMenu type="home" />
      </aside>
      <main className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </main>
      <aside className="hidden lg:block w-[30%]">
        <RightMenu />
      </aside>
    </div>
  );
};

export default Homepage;