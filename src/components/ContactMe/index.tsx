"use client";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:jawwadahmad.edu@gmail?subject=${formData.subject}&body=Hi, My name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

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

        {/* Contact Information */}
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

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              type="text"
              placeholder="Name"
              className="contactInput"
            />
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="contactInput"
            />
          </div>
          <input
            {...register("subject")}
            type="text"
            placeholder="Subject"
            className="contactInput"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-yellow-500 px-8 py-3 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
