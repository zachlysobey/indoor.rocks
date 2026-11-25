import type { DataModel } from "./dataModel";
import { nycGyms } from "./data/nyc-gyms";
import { nySuburbsGyms } from "./data/ny-suburbs-gyms";
import { nyUpstateGyms } from "./data/ny-upstate-gyms";
import { njGyms } from "./data/nj-gyms";
import { ctGyms } from "./data/ct-gyms";
import { maGyms } from "./data/ma-gyms";
import { vtGyms } from "./data/vt-gyms";
import { riGyms } from "./data/ri-gyms";
import { nhGyms } from "./data/nh-gyms";
import { meGyms } from "./data/me-gyms";
import { paGyms } from "./data/pa-gyms";
import { mdGyms } from "./data/md-gyms";
import { deGyms } from "./data/de-gyms";
import { dcGyms } from "./data/dc-gyms";
import { vaGyms } from "./data/va-gyms";
import { wvGyms } from "./data/wv-gyms";
import { ohGyms } from "./data/oh-gyms";
import { kyGyms } from "./data/ky-gyms";
import { inGyms } from "./data/in-gyms";
import { miGyms } from "./data/mi-gyms";
import { ncGyms } from "./data/nc-gyms";
import { gaGyms } from "./data/ga-gyms";
import { scGyms } from "./data/sc-gyms";
import { flGyms } from "./data/fl-gyms";
import { tnGyms } from "./data/tn-gyms";
import { alGyms } from "./data/al-gyms";
import { msGyms } from "./data/ms-gyms";
import { arGyms } from "./data/ar-gyms";
import { laGyms } from "./data/la-gyms";
import { moGyms } from "./data/mo-gyms";
import { ksGyms } from "./data/ks-gyms";
import { okGyms } from "./data/ok-gyms";
import { iaGyms } from "./data/ia-gyms";
import { neGyms } from "./data/ne-gyms";
import { ndGyms } from "./data/nd-gyms";
import { sdGyms } from "./data/sd-gyms";
import { mtGyms } from "./data/mt-gyms";
import { wyGyms } from "./data/wy-gyms";
import { idGyms } from "./data/id-gyms";
import { akGyms } from "./data/ak-gyms";
import { hiGyms } from "./data/hi-gyms";
import { nmGyms } from "./data/nm-gyms";
import { nvGyms } from "./data/nv-gyms";
import { mnGyms } from "./data/mn-gyms";
import { wiGyms } from "./data/wi-gyms";
import { azGyms } from "./data/az-gyms";
import { orGyms } from "./data/or-gyms";
import { utGyms } from "./data/ut-gyms";
import { waGyms } from "./data/wa-gyms";
import { coGyms } from "./data/co-gyms";
import { caGyms } from "./data/ca-gyms";
import { txGyms } from "./data/tx-gyms";
import { ilGyms } from "./data/il-gyms";
import { abGyms } from "./data/ab-gyms";
import { bcGyms } from "./data/bc-gyms";
import { onGyms } from "./data/on-gyms";
import { qcGyms } from "./data/qc-gyms";

export function getData (): DataModel {
  return {
    climbingGyms: [
      ...nycGyms,
      ...nySuburbsGyms,
      ...nyUpstateGyms,
      ...njGyms,
      ...ctGyms,
      ...maGyms,
      ...vtGyms,
      ...riGyms,
      ...nhGyms,
      ...meGyms,
      ...paGyms,
      ...mdGyms,
      ...deGyms,
      ...dcGyms,
      ...vaGyms,
      ...wvGyms,
      ...ohGyms,
      ...kyGyms,
      ...inGyms,
      ...miGyms,
      ...ncGyms,
      ...gaGyms,
      ...scGyms,
      ...flGyms,
      ...tnGyms,
      ...alGyms,
      ...msGyms,
      ...arGyms,
      ...laGyms,
      ...moGyms,
      ...ksGyms,
      ...okGyms,
      ...iaGyms,
      ...neGyms,
      ...ndGyms,
      ...sdGyms,
      ...mtGyms,
      ...wyGyms,
      ...idGyms,
      ...akGyms,
      ...hiGyms,
      ...nmGyms,
      ...nvGyms,
      ...mnGyms,
      ...wiGyms,
      ...azGyms,
      ...orGyms,
      ...utGyms,
      ...waGyms,
      ...coGyms,
      ...caGyms,
      ...txGyms,
      ...ilGyms,
      ...abGyms,
      ...bcGyms,
      ...onGyms,
      ...qcGyms,
    ],
  };
}
