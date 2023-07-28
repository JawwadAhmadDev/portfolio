import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
type Props = {};

const ContactMe = (props: Props) => {
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute uppercase top-20 tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-2xl md:text-3xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-yellow-500/60">Let's talk</span>
        </h4>

        <div className="space-y-8">
          {/* Phone */}
          <div className="flex space-x-5 items-center justify-center">
            <PhoneIcon className="text-yellow-400/60 animate-pulse h-8 w-8" />
            <p className="text-xl">+923077283346</p>
          </div>
          {/* Email */}
          <div className="flex space-x-5 items-center justify-center">
            <EnvelopeIcon className="text-yellow-400/60 animate-pulse h-8 w-8" />
            <p className="text-xl">jawwadahmad.edu@gmail.com</p>
          </div>
          {/* Location */}
          <div className="flex space-x-5 items-center justify-center">
            <MapPinIcon className="text-yellow-400/60 animate-pulse h-8 w-8" />
            <p className="text-xl">123 Developers Lane</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
