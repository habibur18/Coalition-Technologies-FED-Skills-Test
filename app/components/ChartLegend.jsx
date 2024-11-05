// ChartLegend.jsx
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const ChartLegend = ({ systolicAverage, diastolicAverage }) => (
  <div className="w-full p-4 rounded-lg xl:w-1/4">
    <div>
      <div className="flex items-center mb-2">
        <span className="inline-block w-3 h-3 bg-[#E66FD2] rounded-full mr-2"></span>
        <span className="font-bold text-sm">Systolic</span>
      </div>
      <div className="space-y-2">
        <p className="font-bold text-xl text-left">{systolicAverage}</p>
        {systolicAverage > 120 ? (
          <p className="text-sm flex items-center gap-2">
            <Image src="/ArrowUp.svg" alt="arrow-up" width={10} height={5} />
            <span>Higher than Average</span>
          </p>
        ) : (
          <p className="text-sm flex items-center gap-2">
            <Image
              src="/ArrowDown.svg"
              alt="arrow-down"
              width={10}
              height={5}
            />
            <span>Lower than Average</span>
          </p>
        )}
      </div>
    </div>
    <Separator orientation="horizontal" className="my-4 bg-[#CBC8D4]" />
    <div>
      <div className="flex items-center mb-2">
        <span className="inline-block w-3 h-3 bg-[#8C6FE6] rounded-full mr-2"></span>
        <span className="font-bold text-sm">Diastolic</span>
      </div>
      <div>
        <p className="font-bold text-xl text-left">{diastolicAverage}</p>
        {diastolicAverage > 80 ? (
          <p className="text-sm flex items-center gap-2">
            <Image src="/ArrowUp.svg" alt="arrow-up" width={10} height={5} />
            <span>Higher than Average</span>
          </p>
        ) : (
          <p className="text-sm flex items-center gap-2">
            <Image
              src="/ArrowDown.svg"
              alt="arrow-down"
              width={10}
              height={5}
            />
            <span>Lower than Average</span>
          </p>
        )}
      </div>
    </div>
  </div>
);

export default ChartLegend;
