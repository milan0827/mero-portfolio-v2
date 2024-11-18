import AppHeader from "../../components/app-header/AppHeader";
import Kheldim2 from "./../../assets/images/kheldim-2.png";
import Kheldim1 from "./../../assets/images/kheldim-1.png";

const VMS = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <AppHeader
          variant="primary"
          size="medium"
          headingLevel="h2"
          className="flex flex-col leading-5"
        >
          <span>VMS - Visitor Management System</span>
          <span className="text-sm font-normal text-gray-500">
            Awakened Devs
          </span>
        </AppHeader>
        <p className="text-gray-300  border-b pb-2 border-gray-500/50">
          created a platform for managing visitor registrations and tracking in
          apartment complexes. It simplifies the process of registering,
          tracking, and managing visitors, ensuring enhanced security and a
          smooth visitor experience.
        </p>
      </div>
      <p className="text-gray-300  border-b pb-2 border-gray-500/50">
        In collaboration with their team at Channakya Pvt. Ltd, User worked on a
        full-stack project for a Visitor Management System primarily focused on
        apartments. The platform aimed to streamline the process of registering,
        tracking, and managing visitors, enhancing security and improving the
        overall visitor experience in apartment complexes.
      </p>

      <div className="bg-zinc-900/80  rounded-lg overflow-hidden">
        <img src={Kheldim2} alt="Kheldim tournament" />
        <p className="italic text-gray-500 text-sm text-center py-0.5">
          A preview of player
        </p>
      </div>

      <p className="text-gray-300  border-b pb-2 border-gray-500/50">
        Leveraging the power of Next.js for the web application, paired with
        Firebase for real-time capabilities, PostgreSQL, and Redis for efficient
        data management, Kheldim Tournament delivers a robust and dynamic
        platform. Integrating IME Pay for seamless transactions and Drizzle ORM
        for database management, the solution streamlines tournament
        organization across various sports like chess, futsal, and badminton. It
        enables efficient participant management, scheduling, and payment
        processing, ensuring an exceptional user experience for players and
        organizers.
      </p>

      <div className="bg-zinc-900/80  rounded-lg overflow-hidden">
        <img src={Kheldim1} alt="Kheldim tournament" />
        <p className="italic text-gray-500 text-sm text-center py-0.5">
          A preview of tournament page
        </p>
      </div>

      <p className="text-gray-300 ">
        Kheldim Tournament revolutionizes sports management with seamless
        scheduling, participant management, and payments, leveraging Next.js,
        Firebase, PostgreSQL, and IME Pay for a user-friendly and efficient
        tournament experience.
      </p>
    </div>
  );
};

export default VMS;
