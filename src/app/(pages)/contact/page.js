import RightArrow from "@/assets/icons/rightArrow";
import ButtonOutline from "@/components/ui/buttons/buttonOutline";
import AddressCard from "@/components/ui/cards/addressCard";
import InputFiled from "@/components/ui/inputFiled";
import SectionTitle from "@/components/ui/sectionTitle";
import TextAreaFiled from "@/components/ui/textAreaFiled";
import { addressList } from "@/lib/fackData/addressList";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("@/components/ui/leafletMap"), {
  loading: () => <p>A map is loading</p>,
  ssr: false,
});

export const metadata = {
  title: "Restorative Partners - Contact",
  description: "Architronix is a next js and tailwind css website",
};
const ContactTwo = () => {
  return (
    <section className="mb-30">
      <div className="container-fluid ">
        <SectionTitle
          sectionName={"Contact"}
          sectionTitle={"Let's Heal Together"}
          sectionDesc={
            "Our Contact Us page is your gateway to connect with our team. Whether you have questions, need support, or want to get involved, we're here to listen and help. Reach out to us for more information about our restorative justice initiatives, community programs, or to learn how you can contribute to making a difference."
          }
        />
      </div>
      <div className="container lg:pt-30 2sm:pt-20 pt-14">
        <div>
          <div className="grid lg:grid-cols-3 2sm:grid-cols-2 grid-cols-1 gap-y-6 lg:gap-y-0">
            {addressList.map(
              ({ id, address, company, country, email, phone, lat_lng }) => (
                <AddressCard
                  key={id}
                  id={id}
                  address={address}
                  company={company}
                  country={country}
                  email={email}
                  phone={phone}
                  lat_lng={lat_lng}
                />
              )
            )}
          </div>
          <div className="w-full max-h-[517px] relative z-[1] pt-[84px]">
            <LeafletMap />
          </div>
        </div>
        {/* ------- contact form */}
        <div className="grid lg:grid-cols-2 gap-x-30 gap-y-16 lg:gap-y-0 lg:pt-30 2sm:pt-20 pt-14">
          <h2 className="[font-size:_clamp(40px,7vw,90px)] font-extrabold leading-120">
            Lets Connect!
          </h2>
          <form>
            <InputFiled
              placeholderc={"Your Name"}
              type={"text"}
              className={"mb-[13px]"}
            />
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
            <TextAreaFiled
              placeholder={"Type your massage"}
              className={"min-h-[223px] mb-[13px]"}
            />
            <div className="flex justify-end">
              <ButtonOutline>
                Send message <RightArrow height={"22"} width={"35"} />
              </ButtonOutline>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactTwo;
