const diagnoses = [
  {
    problem: "Hypertension",
    description: "Chronic high blood pressure",
    status: "Under Observation",
  },
  {
    problem: "Type 2 Diabetes",
    description: "Insulin resistance and elevated blood sugar",
    status: "Cured",
  },
  {
    problem: "Asthma",
    description: "Recurrent episodes of bronchial constriction",
    status: "Inactive",
  },
  {
    problem: "Osteoarthritis",
    description: "Degenerative joint disease",
    status: "Under treatment",
  },
  {
    problem: "Migraine",
    description: "Recurrent severe headaches",
    status: "Active",
  },
  {
    problem: "Allergic Rhinitis",
    description: "Inflammation of the nasal passages",
    status: "Seasonal",
  },
  {
    problem: "Allergic Rhinitis",
    description: "Inflammation of the nasal passages",
    status: "Seasonal",
  },
  {
    problem: "Allergic Rhinitis",
    description: "Inflammation of the nasal passages",
    status: "Seasonal",
  },
  {
    problem: "Allergic Rhinitis",
    description: "Inflammation of the nasal passages",
    status: "Seasonal",
  },
  {
    problem: "Allergic Rhinitis",
    description: "Inflammation of the nasal passages",
    status: "Seasonal",
  },
];

export default function DiagnosticListUpdate() {
  return (
    <div className="bg-white p-4 sm:p-6 font-sans">
      <h1 className="text-xl sm:text-[22px] font-semibold text-[#111827] mb-4 sm:mb-6">
        Diagnostic List
      </h1>
      <div className="relative overflow-x-auto">
        <div className="min-w-[375px]">
          <table className="w-full text-left bg-[#F6F7F8] rounded-[24px]">
            <thead className="">
              <tr>
                <th className="py-2 sm:py-3.5 pl-2 sm:pl-4 pr-1 sm:pr-3  text-xs sm:text-sm font-medium text-[#111827] w-[30%]">
                  <div className="break-words">Problem/Diagnosis</div>
                </th>
                <th className="px-1 sm:px-3 py-2 sm:py-3.5  text-xs sm:text-sm font-medium text-[#111827] w-[50%]">
                  <div className="break-words">Description</div>
                </th>
                <th className="py-2 sm:py-3.5 pl-1 sm:pl-3 pr-2 sm:pr-4  text-xs sm:text-sm font-medium text-[#111827] w-[20%]">
                  <div className="break-words">Status</div>
                </th>
              </tr>
            </thead>
          </table>
          <div className="max-h-[340px] overflow-y-auto">
            <table className="w-full">
              <tbody>
                {diagnoses.map((diagnosis, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#E5E7EB] last:border-b-0 "
                  >
                    <td className="py-2 sm:py-4 pl-2 sm:pl-4 pr-1 sm:pr-3 text-xs sm:text-sm font-medium text-[#111827] w-[30%]">
                      <div className="break-words">{diagnosis.problem}</div>
                    </td>
                    <td className="px-1 sm:px-3 py-2 sm:py-4 text-xs sm:text-sm text-[#6B7280] w-[50%]">
                      <div className="break-words">{diagnosis.description}</div>
                    </td>
                    <td className="py-2 sm:py-4 pl-1 sm:pl-3 pr-2 sm:pr-4 text-xs sm:text-sm text-[#111827] w-[20%]">
                      <div className="break-words">{diagnosis.status}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
