import { ms } from "../src/milsymbol.js";
ms.reset();

import { app6b } from "stanag-app6";
import verify from "./letter-sidc.js";
ms.setStandard("APP6");

import { space } from "../src/lettersidc.js";
ms.addIcons(space);

export default verify(ms, "APP-6 B Space", app6b.WAR.SPC);
