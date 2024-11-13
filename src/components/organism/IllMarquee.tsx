import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

const illnesses = [
  {
    name: "Diabetes",
    type: "Penyakit Kronis",
    description: "Gangguan metabolisme glukosa dalam darah",
    severity: "Kronis",
  },
  {
    name: "Hipertensi",
    type: "Penyakit Kardiovaskular",
    description: "Tekanan darah tinggi yang persisten",
    severity: "Kronis",
  },
  {
    name: "Asma",
    type: "Penyakit Pernapasan",
    description: "Peradangan dan penyempitan saluran napas",
    severity: "Kronis",
  },
  {
    name: "Tuberkulosis",
    type: "Penyakit Infeksi",
    description: "Infeksi bakteri yang menyerang paru-paru",
    severity: "Serius",
  },
  {
    name: "Malaria",
    type: "Penyakit Parasit",
    description: "Infeksi yang ditularkan nyamuk Anopheles",
    severity: "Akut",
  },
  {
    name: "Dengue",
    type: "Penyakit Virus",
    description: "Infeksi virus yang ditularkan nyamuk Aedes",
    severity: "Akut",
  },
];

const firstRow = illnesses.slice(0, illnesses.length / 2);
const secondRow = illnesses.slice(illnesses.length / 2);

const IllnessCard = ({
  name,
  type,
  description,
  severity,
}: {
  name: string;
  type: string;
  description: string;
  severity: string;
}) => {
  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'kronis':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'serius':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'akut':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-white hover:bg-gray-50",
        "dark:border-gray-50/[.1] dark:bg-gray-900 dark:hover:bg-gray-800"
      )}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <figcaption className="text-lg font-medium dark:text-white">
            {name}
          </figcaption>
          <span className={cn(
            "px-2 py-1 text-xs font-medium rounded-full",
            getSeverityColor(severity)
          )}>
            {severity}
          </span>
        </div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {type}
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </figure>
  );
};

export function IllMarquee() {
  return (
    <div className="relative flex  w-screen flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((illness) => (
          <IllnessCard key={illness.name} {...illness} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((illness) => (
          <IllnessCard key={illness.name} {...illness} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}