import Title from "../../Components/Title/Title";
import DefaultLayout from "../../layout/DefaultLayout";
import { Teams_Members } from "../../constants";
function Teams() {
  return (
    <DefaultLayout>
      <div className="bg-secondary ">
        <div className="ml-[15%] mr-[20%]">
          <Title
            fontSize="5xl"
            className="tracking-wider pt-20"
            // marginTop="mt-20"
            weight="bold"
          >
            The Green Boom Team
          </Title>
          <Title
            height="6"
            className="w-[60%] pb-16 "
            marginTop="mt-5"
            weight="light"
          >
            Green Boom, with a corporate office in Duluth, USA are ready to
            supply your needs wherever you are in the world. With a strong
            passion for sustainability and creating excellent customer value,
            our team will always aim to accommodate your needs, when needed.{" "}
          </Title>
          <div className="grid grid-cols-3  gap-10 ">
            {Teams_Members.map((team) => (
              <div key={team.id} className="text-center pb-20">
                <img
                  src={team.img}
                  alt={team.name}
                  className="w-52 h-52 mx-auto bg-white rounded-full"
                />
                <Title fontSize="md" weight="normal" marginTop="mt-4">
                  {team.name}
                </Title>
                <Title fontSize="md" weight="light" marginTop="mt-6">
                  {team.rank}
                </Title>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-16 flex justify-center items-center">
        <button className="bg-primaryA text-white px-8 py-2 text-lg font-bold rounded-lg hover:border hover:border-black">
          CONTACT US
        </button>
      </div>
    </DefaultLayout>
  );
}

export default Teams;
