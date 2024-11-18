import AppHeader from "../../components/app-header/AppHeader";
import Kusers from "./../../assets/images/kusers.png";
import Kroles from "./../../assets/images/kroles.png";
import Kfin from "./../../assets/images/kfin.png";

const KheldimAdmin = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <AppHeader
          variant="primary"
          size="medium"
          headingLevel="h2"
          className="flex flex-col leading-5"
        >
          <span>Kheldim Tournament</span>
          <span className="text-sm font-normal text-gray-500">
            Awakened Devs
          </span>
        </AppHeader>
        <p className="text-gray-300  border-b pb-2 border-gray-500/50">
          An acclaimed platform for Kheldim Tournament featuring a unique
          solution for booking futsal venues and organizing sports tournaments,
          with an efficient admin side for managing reservations, participant
          registrations, and match schedules.
        </p>
      </div>
      <p className="text-gray-300  border-b pb-2 border-gray-500/50">
        The Kheldim Admin platform features an efficient admin side designed to
        streamline the management of bookings, participant registrations, and
        match schedules for sports tournaments. It offers a comprehensive
        solution for organizing futsal events, ensuring a seamless experience
        for both players and tournament organizers.
      </p>

      <div className="bg-zinc-900/80  rounded-lg overflow-hidden">
        <img src={Kusers} alt="Kheldim tournament" />
        <p className="italic text-gray-500 text-sm text-center py-0.5">
          A preview of registering player
        </p>
      </div>

      <p className="text-gray-300  border-b pb-2 border-gray-500/50">
        Powered by Node.js and Express.js for the backend, and React.js with
        React Table for an interactive frontend, the Kheldim Admin platform
        provides a streamlined solution for managing futsal venue bookings,
        participant registrations, and match scheduling. With React Query for
        efficient data fetching and PostgreSQL for robust data storage, the
        platform ensures a smooth and efficient experience for tournament
        organizers and players.
      </p>

      <div className="bg-zinc-900/80  rounded-lg overflow-hidden">
        <img src={Kroles} alt="Kheldim tournament" />
        <p className="italic text-gray-500 text-sm text-center py-0.5">
          A preview of admin roles
        </p>
      </div>

      <p className="text-gray-300 ">
        Kheldim Admin transforms tournament management with streamlined
        scheduling, participant tracking, and match organization, using Node.js,
        Express.js, React.js, React Table, React Query, and PostgreSQL to create
        a seamless and efficient experience for organizers and players.
      </p>
    </div>
  );
};

export default KheldimAdmin;
