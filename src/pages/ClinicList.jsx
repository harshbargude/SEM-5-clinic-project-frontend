import { Link } from "react-router-dom";
import { clinics } from "../JSON/Clinic"; // Importing the clinic data
import "../pagesCss/ClinicListCss.css";
// import "../JavaScriptFile/ClinicListScript"

export function ClinicList() {
  return (
    <div>
      <h1>Clinic List</h1>
      <div className="ClinicCard">
        <ul>
          <div className="OfList">
          {clinics.map((clinic) => (

              <li key={clinic.clinicId} className="liOfClinics">
                
                <Link to={`/patient-dashboard/clinic/${clinic.clinicId}`}><h4>Clinic: <span className="span_ClinicName">{clinic.clinicName}</span></h4>  <h4>specialization-{clinic.specialization}</h4>  </Link>
              </li>
          ))}
          </div>
        </ul>
      </div>

    </div>
  );
}
