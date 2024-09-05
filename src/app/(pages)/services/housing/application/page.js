import RightArrow from "@/assets/icons/rightArrow";
import ButtonOutline from "@/components/ui/buttons/buttonOutline";
import InputFiled from "@/components/ui/inputFiled";
import SectionTitle from "@/components/ui/sectionTitle";
import TextAreaFiled from "@/components/ui/textAreaFiled";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Restorative Partners - Housing Waitlist Application",
  description: "Architronix is a next js and tailwind css website",
};

const HousingApplication = () => {
  return (
    <section className="mb-5">
      <div className="container-fluid">
        <SectionTitle
          sectionName={"Housing"}
          sectionTitle={"Waitlist Application"}
          sectionDesc={
            "Please fill out the application below to start the process of enrolling into our housing program!"
          }
        />
      </div>
      <div className="container lg:pt-10 2sm:pt-10 pt-7">
        {/* ------- contact form */}
        <div className="grid lg:grid-cols-1 gap-x-30 gap-y-16 lg:gap-y-0 lg:pt-30 2sm:pt-20 pt-14">
          <form>
            <div className="mb-[13px]">
              <label className="block text-lg font-semibold mb-2">
                Have you previously participated in any programs with
                Restorative Partners?
              </label>

              <div className="flex items-center gap-5">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="employment"
                    value="yes"
                    className="form-radio accent-[#00706B]" // Tailwind accent color
                    style={{ accentColor: "#00706B" }} // Fallback for browsers without tailwind accent
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="employment"
                    value="no"
                    className="form-radio accent-[#00706B]"
                    style={{ accentColor: "#00706B" }}
                  />
                  No
                </label>
              </div>
            </div>
            <h2
              className={cn(
                `[font-size:_clamp(48px,7vw,30px)] font-extrabold leading-110 text-primary-foreground mb-5 `
              )}
            >
              Personal Information
            </h2>

            <span
              className={cn(`block w-[300px] h-[1px] bg-primary mb-10`)}
            ></span>

            <div className="flex sm:flex-row flex-col gap-x-5">
              <InputFiled
                placeholderc={"First Name"}
                type={"text"}
                className={"mb-[13px]"}
              />
              <InputFiled
                placeholderc={"Middle Name"}
                type={"text"}
                className={"mb-[13px]"}
              />
              <InputFiled
                placeholderc={"Last Name"}
                type={"text"}
                className={"mb-[13px]"}
              />
            </div>
            <div className="flex sm:flex-row flex-col gap-x-5">
              <InputFiled
                placeholderc={"Phone Number"}
                type={"number"}
                className={"mb-[13px]"}
              />
              <InputFiled
                placeholderc={"Your Email"}
                type={"email"}
                className={"mb-[13px]"}
              />
            </div>
            <div className="flex sm:flex-row flex-col gap-x-5">
              <InputFiled
                placeholderc={"Date of Birth"}
                type={"date"}
                className={"mb-[13px]"}
              />
            </div>

            <h2
              className={cn(
                `[font-size:_clamp(48px,7vw,30px)] font-extrabold leading-110 text-primary-foreground mb-5 `
              )}
            >
              Address
            </h2>

            <span
              className={cn(`block w-[300px] h-[1px] bg-primary mb-10`)}
            ></span>

            <div className="flex sm:flex-row flex-col gap-x-5">
              <InputFiled
                placeholderc={"Street Address"}
                type={"text"}
                className={"mb-[13px]"}
              />
            </div>
            <div className="flex sm:flex-row flex-col gap-x-5">
              <InputFiled
                placeholderc={"Address Line 2"}
                type={"text"}
                className={"mb-[13px]"}
              />
            </div>
            <div className="flex sm:flex-row flex-col gap-x-5">
              <InputFiled
                placeholderc={"City"}
                type={"text"}
                className={"mb-[13px]"}
              />
              <InputFiled
                placeholderc={"State"}
                type={"text"}
                className={"mb-[13px]"}
              />
              <InputFiled
                placeholderc={"Zip"}
                type={"number"}
                className={"mb-[13px]"}
              />
            </div>

            <h2
              className={cn(
                `[font-size:_clamp(48px,7vw,30px)] font-extrabold leading-110 text-primary-foreground mb-5 `
              )}
            >
              Legal Status
            </h2>

            <span
              className={cn(`block w-[300px] h-[1px] bg-primary mb-10`)}
            ></span>

            {/* Yes/No Question */}
            <div className="mb-[13px]">
              <label className="block text-lg font-semibold mb-2">
                Are you able to pay for a part of your treatment/membership?
              </label>
              <div className="flex items-center gap-5">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="employment"
                    value="yes"
                    className="form-radio accent-[#00706B]" // Tailwind accent color
                    style={{ accentColor: "#00706B" }} // Fallback for browsers without tailwind accent
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="employment"
                    value="no"
                    className="form-radio accent-[#00706B]"
                    style={{ accentColor: "#00706B" }}
                  />
                  No
                </label>
              </div>
            </div>

            <div className="mb-[13px]">
              <label className="block text-lg font-semibold mb-2">
                Are you currently incarcerated?
              </label>
              <div className="flex items-center gap-5">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="employment"
                    value="yes"
                    className="form-radio accent-[#00706B]" // Tailwind accent color
                    style={{ accentColor: "#00706B" }} // Fallback for browsers without tailwind accent
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="employment"
                    value="no"
                    className="form-radio accent-[#00706B]"
                    style={{ accentColor: "#00706B" }}
                  />
                  No
                </label>
              </div>
            </div>

            <h2
              className={cn(
                `[font-size:_clamp(48px,7vw,30px)] font-extrabold leading-110 text-primary-foreground mb-5 `
              )}
            >
              Treatment History
            </h2>

            <span
              className={cn(`block w-[300px] h-[1px] bg-primary mb-10`)}
            ></span>

            <div className="mb-[13px]">
              <label className="block text-lg font-semibold mb-2">
                Are you receiving alcoholism/drug addiction treatment?
              </label>
              <div className="flex items-center gap-5">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="employment"
                    value="yes"
                    className="form-radio accent-[#00706B]" // Tailwind accent color
                    style={{ accentColor: "#00706B" }} // Fallback for browsers without tailwind accent
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="employment"
                    value="no"
                    className="form-radio accent-[#00706B]"
                    style={{ accentColor: "#00706B" }}
                  />
                  No
                </label>
              </div>
            </div>

            {/* Multi Checkbox Select */}
            <div className="mb-[13px]">
              <label className="block text-lg font-semibold mb-2">
                Select all that apply to your treatment history.{" "}
              </label>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="services"
                    value="drug-court"
                    className="form-checkbox accent-[#00706B]"
                    style={{ accentColor: "#00706B" }}
                  />
                  Drug Court
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="services"
                    value="counseling"
                    className="form-checkbox accent-[#00706B]"
                    style={{ accentColor: "#00706B" }}
                  />
                  Prop 36
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="services"
                    value="job"
                    className="form-checkbox accent-[#00706B]"
                    style={{ accentColor: "#00706B" }}
                  />
                  AB109
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="services"
                    value="legal"
                    className="form-checkbox accent-[#00706B]"
                    style={{ accentColor: "#00706B" }}
                  />
                  POEG
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="services"
                    value="legal"
                    className="form-checkbox accent-[#00706B]"
                    style={{ accentColor: "#00706B" }}
                  />
                  ATCC
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="services"
                    value="legal"
                    className="form-checkbox accent-[#00706B]"
                    style={{ accentColor: "#00706B" }}
                  />
                  BATC
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="services"
                    value="legal"
                    className="form-checkbox accent-[#00706B]"
                    style={{ accentColor: "#00706B" }}
                  />
                  Self-Referral
                </label>
              </div>
            </div>

            <div className="mb-[13px]">
              <label className="block text-lg font-semibold mb-2">
                Have you been treated at any of these locations?
              </label>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="services"
                    value="housing"
                    className="form-checkbox accent-[#00706B]"
                    style={{ accentColor: "#00706B" }}
                  />
                  SLO
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="services"
                    value="counseling"
                    className="form-checkbox accent-[#00706B]"
                    style={{ accentColor: "#00706B" }}
                  />
                  North County
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="services"
                    value="job"
                    className="form-checkbox accent-[#00706B]"
                    style={{ accentColor: "#00706B" }}
                  />
                  South County
                </label>
              </div>
            </div>

            <div className="mb-[13px]">
              <label className="block text-lg font-semibold mb-2">
                Is your rent funded through your treatment program?
              </label>
              <div className="flex items-center gap-5">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="employment"
                    value="yes"
                    className="form-radio accent-[#00706B]" // Tailwind accent color
                    style={{ accentColor: "#00706B" }} // Fallback for browsers without tailwind accent
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="employment"
                    value="no"
                    className="form-radio accent-[#00706B]"
                    style={{ accentColor: "#00706B" }}
                  />
                  No
                </label>
              </div>
            </div>
            <h2
              className={cn(
                `[font-size:_clamp(48px,7vw,30px)] font-extrabold leading-110 text-primary-foreground mb-5 `
              )}
            >
              Contacts
            </h2>

            <span
              className={cn(`block w-[300px] h-[1px] bg-primary mb-10`)}
            ></span>
            <div className="flex sm:flex-row flex-col gap-x-5">
              <InputFiled
                placeholderc={"Case Worker Name"}
                type={"text"}
                className={"mb-[13px]"}
              />
            </div>

            <div className="flex sm:flex-row flex-col gap-x-5">
              <InputFiled
                placeholderc={"Case Worker Phone"}
                type={"phone"}
                className={"mb-[13px]"}
              />
            </div>
            <div className="flex sm:flex-row flex-col gap-x-5">
              <InputFiled
                placeholderc={"Treatment Counselor Name"}
                type={"text"}
                className={"mb-[13px]"}
              />
            </div>
            <div className="flex sm:flex-row flex-col gap-x-5">
              <InputFiled
                placeholderc={"Treatment Counselor Phone"}
                type={"phone"}
                className={"mb-[13px]"}
              />
            </div>
            <div className="flex sm:flex-row flex-col gap-x-5">
              <InputFiled
                placeholderc={"Probation Officer Name"}
                type={"text"}
                className={"mb-[13px]"}
              />
            </div>
            <div className="flex sm:flex-row flex-col gap-x-5">
              <InputFiled
                placeholderc={"Probation Officer Phone"}
                type={"phone"}
                className={"mb-[13px]"}
              />
            </div>

            <h2
              className={cn(
                `[font-size:_clamp(48px,7vw,30px)] font-extrabold leading-110 text-primary-foreground mb-5 `
              )}
            >
              Drug History
            </h2>

            <span
              className={cn(`block w-[300px] h-[1px] bg-primary mb-10`)}
            ></span>

            <TextAreaFiled
              placeholder={
                "Please describe your pattern of drug and alcohol use in the last 30 days"
              }
              className={"min-h-[223px] mb-[13px]"}
            />

            <div className="mb-[13px]">
              <label className="block text-lg font-semibold mb-2">
                How long since you've used drugs or alcohol?
              </label>

              <div className="flex items-center gap-5">
                <InputFiled
                  placeholderc={"Ex: 90 Days"}
                  type={"text"}
                  className={"mb-[13px]"}
                />
              </div>
            </div>

            <div className="mb-[13px]">
              <label className="block text-lg font-semibold mb-2">
                What did you last use?
              </label>

              <div className="flex items-center gap-5">
                <InputFiled
                  placeholderc={"Ex: Alcohol"}
                  type={"text"}
                  className={"mb-[13px]"}
                />
              </div>
            </div>

            <div className="mb-[13px]">
              <label className="block text-lg font-semibold mb-2">
                How long has using drugs and/or alcohol been a problem for you?
              </label>

              <div className="flex items-center gap-5">
                <InputFiled
                  placeholderc={"Ex: 10 years"}
                  type={"text"}
                  className={"mb-[13px]"}
                />
              </div>
            </div>

            <h2
              className={cn(
                `[font-size:_clamp(48px,7vw,30px)] font-extrabold leading-110 text-primary-foreground mb-5 `
              )}
            >
              Employment
            </h2>

            <span
              className={cn(`block w-[300px] h-[1px] bg-primary mb-10`)}
            ></span>

            <div className="flex sm:flex-row flex-col gap-x-5">
              <InputFiled
                placeholderc={"Employer Name"}
                type={"text"}
                className={"mb-[13px]"}
              />
            </div>

            <div className="flex sm:flex-row flex-col gap-x-5">
              <InputFiled
                placeholderc={"Employer Phone"}
                type={"phone"}
                className={"mb-[13px]"}
              />
            </div>
            <div className="flex sm:flex-row flex-col gap-x-5">
              <InputFiled
                placeholderc={"Occupation"}
                type={"text"}
                className={"mb-[13px]"}
              />
            </div>
            <div className="flex sm:flex-row flex-col gap-x-5">
              <InputFiled
                placeholderc={"Years of Employment"}
                type={"text"}
                className={"mb-[13px]"}
              />
            </div>

            <div className="flex justify-end">
              <ButtonOutline>
                Submit Application <RightArrow height={"22"} width={"35"} />
              </ButtonOutline>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HousingApplication;
