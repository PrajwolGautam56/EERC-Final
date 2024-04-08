import "../CSS/table.css";
import projects from "../projects.json"
const ProjectsTable = () => {
  
  return (
    <div className="p-24 proj">
      <h2 className="text-center text-4xl font-bold  p-8 ">
        Some Projects
      </h2>
      <div className="proj-table border-spacing-1 border-solid border-2 p-3">
      <table className="w-full  border border-black text-center rounded-sm overflow-scroll proj-table  ">
        <thead className="border border-black p-5">
          <tr>
            <th className="tableHeader w-2/5">Name of the Company</th>
            <th className="tableHeader w-2/5"> Project Details</th>
            <th className="tableHeader  w-1/5"> Completion Date</th>
          </tr>
        </thead>

        <tbody>
          {/* Filling Dummy data for now */}
          {projects.projects.map((project,id)=>{
            return(
              <tr key={id}>
            <td className="tableBody">{project.client} </td>
            <td className="tableBody text-left">{project.namw} </td>
            <td className="tableBody">{project.date}</td>
          </tr>

            )

          })}
         
        </tbody>
      </table>
      </div>
      
    </div>
  );
};

export default ProjectsTable;
