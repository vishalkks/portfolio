import { motion } from "framer-motion";
import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlobsPlayground from "../components/animations/BlobsPlayground";
import Button from "../components/common/Button";
import MessageInput from "../components/common/MessageInput";
import TextInput from "../components/common/TextInput";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    console.log(name, email, subject, message);
    const mailtoUrl = `mailto:vishalkks@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Email: ${email}\n\n${message}`)}`;
    const win = window.open(mailtoUrl, "_blank");
    if (win) win.focus();

    form.reset();
    toast.success(
      "Awesome, fingers crossed you hit send in your mail client. Let's chat soon!",
      {
        position: "top-center",
        autoClose: 9000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { width: "400px" },
      }
    );
  };

  return (
    <BlobsPlayground>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="mt-24 mb-10"
      >
        <h2 className="text-6xl pb-4"> Contact me</h2>
        <p className="text-2xl font-light">
          Interested in working together or just wanna have a coffee sometime?
        </p>
      </motion.div>
      <motion.form
        onSubmit={submitHandler}
        ref={formRef}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.6, delay: 0.4 }}
        className="w-full flex gap-6 md:flex-row flex-col pb-40"
      >
        <div className="flex-1">
          <TextInput name="name" placeholder="Name" />
          <TextInput name="email" type="email" placeholder="Email" />
          <TextInput name="subject" placeholder="Subject" />
        </div>
        <div className="flex-1">
          <MessageInput
            name="message"
            placeholder="Say literally anything here..."
          />
          <Button label="Send" />
          <ToastContainer />
        </div>
      </motion.form>
    </BlobsPlayground>
  );
};

export default Contact;
