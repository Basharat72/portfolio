/* =========================================================================
   brandLogos.tsx — official brand marks from simple-icons, rendered in their
   brand colors. Tree-shaking keeps only the icons imported here.
   Trademark-restricted marks (Tableau, LinkedIn, Excel) keep the hand-drawn
   icons from icons.tsx instead.
   ========================================================================= */

import {
  siApacheairflow, siBosch, siDocker, siFraunhofergesellschaft, siGit,
  siGooglebigquery, siHyundai, siMongodb, siMysql, siPandas, siPlotly,
  siPython, siPytorch, siR, siScikitlearn, siStreamlit, siVolkswagen,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

function make(icon: SimpleIcon) {
  return function BrandLogo({ size = 22 }: { size?: number }) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
        <path d={icon.path} fill={`#${icon.hex}`} />
      </svg>
    );
  };
}

export const PythonLogo = make(siPython);
export const RLogo = make(siR);
export const ScikitLogo = make(siScikitlearn);
export const PytorchLogo = make(siPytorch);
export const PandasLogo = make(siPandas);
export const AirflowLogo = make(siApacheairflow);
export const DockerLogo = make(siDocker);
export const GitLogo = make(siGit);
export const BigqueryLogo = make(siGooglebigquery);
export const MongoLogo = make(siMongodb);
export const MysqlLogo = make(siMysql);
export const StreamlitLogo = make(siStreamlit);
export const PlotlyLogo = make(siPlotly);
export const HyundaiLogo = make(siHyundai);
export const VolkswagenLogo = make(siVolkswagen);
export const BoschLogo = make(siBosch);
export const FraunhoferLogo = make(siFraunhofergesellschaft);
