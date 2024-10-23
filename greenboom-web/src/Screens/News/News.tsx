import DefaultLayout from "../../layout/DefaultLayout";
import Title from "../../Components/Title/Title";
import Header from "../../Components/News/Header";
import Blogs from "../../Components/News/Blogs";
function News() {
  return (
    <div>
      <DefaultLayout>
        <Title
          className="text-primaryA text-center pt-20 pb-12"
          fontSize="4xl"
          weight="medium"
        >
          Newsletters & Press Releases
        </Title>
        <div className="ml-48 mr-60 bg-secondary ">
          <Header />
          <Blogs />
        </div>
      </DefaultLayout>
    </div>
  );
}

export default News;
