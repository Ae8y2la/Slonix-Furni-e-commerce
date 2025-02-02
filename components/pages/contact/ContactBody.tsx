import Button from "@/components/UI/Button";
import FormInput from "@/components/UI/FormInput";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

function ContactBody() {
  return (
    <div className="contact-body container text-center pt-10 lg:pt-24 pb-20 max-w-[900px] mx-auto ">
      {/* Head */}
      <div className="contact-head">
        <h3 className="text-3xl font-bold text-white">Get In Touch With Us</h3>
        <p className="text-white text-sm max-w-[500px] mx-auto mt-2">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      {/* Body Down */}
      <div className="contact-down-body pt-10 lg:pt-32 flex flex-wrap justify-center items-start lg:gap-20 xl:gap-24">
        {/* Contact Ways (left) */}
        <div className="contact-ways">
          {/* Address */}
          <div className="address flex gap-4 mb-8">
            <FaLocationDot className="text-2xl" />
            <div className="text-start max-w-[200px] text-white">
              <h4 className="font-bold text-lg text-white">Address</h4>
              <p>236 5xxxxxx, xxxx xx10000, xxx</p>
            </div>
          </div>

          {/* Phone */}
          <div className="phone flex gap-4 mb-8">
            <FaPhoneAlt className="text-2xl" />
            <div className="text-start max-w-[200px] text-white">
              <h4 className="font-bold text-lg text-white">Phone</h4>
              <p>
                Mobile: +(x0) xxxxxxxxxx
                <br />
                Hotline: +(x0)xxx
              </p>
            </div>
          </div>

          {/* Working Time */}
          <div className="phone flex gap-4 mb-8">
            <MdOutlineAccessTimeFilled className="text-2xl" />
            <div className="text-start max-w-[180px] text-white">
              <h4 className="font-bold text-lg text-white">Working Time</h4>
              <p>
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        {/* Form (right) */}
        <form action="" className="w-[320px] lg:w-[500px] text-left text-white">
          <FormInput
            id="contactname"
            label="Your Name"
            placeholder="Abc"
            required={true}
          />
          <FormInput
            id="contactmail"
            label="Email address"
            placeholder="Abc@def.com"
            required={true}
          />
          <FormInput
            id="contactsubject"
            label="Subject"
            placeholder="This is an optional"
          />
          <>
            <label htmlFor="contactmsg" className="mb-3 block mt-6">
              Message
            </label>
            <textarea
              className="py-3 px-3 border border-white rounded-lg block w-full focus:outline-white"
              id="contactmsg"
              placeholder="Hi! i’d like to ask about"
            ></textarea>
          </>
          <Button
            title="Submit"
            className="px-20 rounded capitalize !text-sm font-normal mt-10"
          />
        </form>
      </div>
    </div>
  );
}
export default ContactBody;
