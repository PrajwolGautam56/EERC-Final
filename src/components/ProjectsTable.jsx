import "../CSS/table.css";
const ProjectsTable = () => {
  return (
    <div className="p-12">
      <h2 className="text-center text-4xl font-bold  p-8 ">
        Completed Projects
      </h2>
      <table className="w-full border border-black text-center rounded-sm ">
        <thead className="border border-black p-5">
          <tr>
            <th className="tableHeader">Name of the Company</th>
            <th className="tableHeader"> Project Details</th>
            <th className="tableHeader"> Completion Date</th>
          </tr>
        </thead>

        <tbody>
          {/* Filling Dummy data for now */}
          <tr>
            <td className="tableBody">Header 1 </td>
            <td className="tableBody">Fake details </td>
            <td className="tableBody">any year would work</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;
