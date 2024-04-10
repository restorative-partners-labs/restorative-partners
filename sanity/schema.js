import { staff } from "./schemas/staff";
import { siteSettings } from "./schemas/siteSettings";
import { event } from "./schemas/event";

export const schema = {
  types: [staff, siteSettings, event],
};
