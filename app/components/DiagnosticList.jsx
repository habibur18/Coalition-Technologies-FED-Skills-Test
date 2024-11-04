const diagnostic_list = [
  {
    name: "Type 2 Diabetes",
    description:
      "A chronic condition that affects the way the body processes blood sugar (glucose).",
    status: "Actively being treated",
  },
  {
    name: "Type 2 Diabetes",
    description:
      "A chronic condition that affects the way the body processes blood sugar (glucose).",
    status: "Untreated",
  },
  {
    name: "Hypertension",
    description:
      "A condition in which the force of the blood against the artery walls is too high.",
    status: "Under observation",
  },
];

export default function DiagnosticList() {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-[16px]">
      <h1 className="text-[1.50rem] font-extrabold  mb-4 sm:mb-6">
        Diagnostic List
      </h1>
      <div className="relative overflow-x-auto">
        <div className="min-w-[177px]">
          <table className="w-full text-left bg-[#F6F7F8] rounded-[24px] text-sm font-bold">
            <thead className="">
              <tr>
                <th className="py-2 sm:py-3.5 pl-2 sm:pl-4 pr-1 sm:pr-3 w-[30%]">
                  <div className="break-words">Problem/Diagnosis</div>
                </th>
                <th className="px-1 sm:px-3 py-2 sm:py-3.5 w-[50%]">
                  <div className="break-words">Description</div>
                </th>
                <th className="py-2 sm:py-3.5 pl-1 sm:pl-3 pr-2 sm:pr-4 w-[20%]">
                  <div className="break-words">Status</div>
                </th>
              </tr>
            </thead>
          </table>
          <div className="max-h-[240px] overflow-y-auto overflow-x-hidden">
            <table className="w-full text-sm">
              <tbody>
                {diagnostic_list.map((diagnosis, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#E5E7EB] last:border-b-0 "
                  >
                    <td className="py-2 sm:py-4 pl-2 sm:pl-4 pr-1 sm:pr-3  font-medium  w-[30%]">
                      <div className="break-words">{diagnosis.name}</div>
                    </td>
                    <td className="px-1 sm:px-3 py-2 sm:py-4  w-[50%]">
                      <div className="break-words">{diagnosis.description}</div>
                    </td>
                    <td className="py-2 sm:py-4 pl-1 sm:pl-3 pr-2 sm:pr-4   w-[20%]">
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
