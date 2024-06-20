import { staff } from "./schemas/staff";
import { siteSettings } from "./schemas/siteSettings";
import { event } from "./schemas/event";
import { homePageSettings } from "./schemas/homePageSettings";

export const schema = {
  types: [staff, siteSettings, homePageSettings, event],
};
