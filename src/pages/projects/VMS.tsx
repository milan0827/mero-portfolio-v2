import AppHeader from "../../components/app-header/AppHeader";
import VMS1 from "./../../assets/images/vms1.png";
import VMS2 from "./../../assets/images/vms2.png";
import VMS3 from "./../../assets/images/vms3.png";

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
            Channakya Software Pvt. Ltd.
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
        <img src={VMS1} alt="Kheldim tournament" />
        <p className="italic text-gray-500 text-sm text-center py-0.5">
          A preview adding Owner
        </p>
      </div>

      <p className="text-gray-300  border-b pb-2 border-gray-500/50">
        Leveraging the power of React.js for the web application, paired with
        React Table for data presentation, Nx Monorepo for efficient project
        management, GraphQL for data querying, and Apollo Client for state
        management, the Visitor Management System provides a robust and dynamic
        platform. The solution simplifies the process of registering, tracking,
        and managing visitors in apartment complexes, ensuring enhanced security
        and a smooth visitor experience.
      </p>

      <div className="bg-zinc-900/80  rounded-lg overflow-hidden">
        <img src={VMS2} alt="Kheldim tournament" />
        <p className="italic text-gray-500 text-sm text-center py-0.5">
          A preview of Users list
        </p>
      </div>

      <div className="bg-zinc-900/80  rounded-lg overflow-hidden">
        <img src={VMS3} alt="Kheldim tournament" />
        <p className="italic text-gray-500 text-sm text-center py-0.5">
          A preview of Appartment list
        </p>
      </div>

      <p className="text-gray-300 ">
        The Visitor Management System streamlines the process of registering,
        tracking, and managing visitors in apartment complexes, ensuring
        enhanced security and a smooth visitor experience. Leveraging React.js,
        React Table, Nx Monorepo, GraphQL, and Apollo Client, the platform
        offers a user-friendly, efficient solution for managing visitor flow.
      </p>
    </div>
  );
};

export default VMS;
